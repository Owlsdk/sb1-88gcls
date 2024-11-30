import axios from 'axios';
import { BitcoinPrice } from '../types';
import { BINANCE_API, CURRENCY_PAIRS, INTERVALS } from './constants';

const axiosInstance = axios.create({
  baseURL: BINANCE_API,
  timeout: 30000
});

// Cache for 5 minutes
const cache = new Map<string, { data: BitcoinPrice[]; timestamp: number }>();
const CACHE_DURATION = 300000;

export async function getBitcoinPriceHistory(
  currency: string,
  startDate: string,
  endDate: string
): Promise<BitcoinPrice[]> {
  const cacheKey = `${currency}-${startDate}-${endDate}`;
  const cached = cache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    const symbol = CURRENCY_PAIRS[currency];
    
    // Get historical data in chunks to ensure complete coverage
    const chunkSize = 1000; // Maximum limit per request
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();
    const chunks: BitcoinPrice[][] = [];
    
    for (let currentTime = startTime; currentTime < endTime; currentTime += chunkSize * 24 * 60 * 60 * 1000) {
      const chunkEndTime = Math.min(currentTime + chunkSize * 24 * 60 * 60 * 1000, endTime);
      
      const response = await axiosInstance.get('/klines', {
        params: {
          symbol,
          interval: INTERVALS.DAILY,
          startTime: currentTime,
          endTime: chunkEndTime,
          limit: chunkSize
        }
      });

      if (!Array.isArray(response.data)) {
        throw new Error('Invalid historical price data');
      }

      const prices = response.data
        .filter(kline => Array.isArray(kline) && kline.length >= 6)
        .map(kline => {
          const [timestamp, open, high, low, close] = kline.map(Number);
          if ([open, high, low, close].some(isNaN)) {
            return null;
          }
          return {
            date: new Date(timestamp).toISOString(),
            price: close // Use closing price for consistency
          };
        })
        .filter((price): price is BitcoinPrice => price !== null);

      chunks.push(prices);
    }

    // Combine all chunks and get current price
    let historicalPrices = chunks.flat();

    // Get current price for today
    const tickerResponse = await axiosInstance.get('/ticker/price', {
      params: { symbol }
    });

    const currentPrice = Number(tickerResponse.data.price);
    if (isNaN(currentPrice)) {
      throw new Error('Invalid current price data');
    }

    // Add current price if looking at recent data
    const today = new Date().toISOString().split('T')[0];
    const endDateStr = new Date(endDate).toISOString().split('T')[0];
    
    if (endDateStr === today) {
      historicalPrices.push({
        date: new Date().toISOString(),
        price: currentPrice
      });
    }

    if (historicalPrices.length === 0) {
      throw new Error('No price data available for the selected date range');
    }

    // Sort by date and ensure unique daily prices
    const prices = historicalPrices
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .filter((price, index, self) => 
        index === self.findIndex(p => p.date.split('T')[0] === price.date.split('T')[0])
      );

    cache.set(cacheKey, { data: prices, timestamp: Date.now() });
    return prices;
  } catch (error) {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please try again.');
      }
      if (error.response?.status === 429) {
        throw new Error('Too many requests. Please wait a moment and try again.');
      }
      if (!error.response) {
        throw new Error('Network error. Please check your connection.');
      }
    }
    throw new Error('Failed to fetch Bitcoin price data. Please try again.');
  }
}