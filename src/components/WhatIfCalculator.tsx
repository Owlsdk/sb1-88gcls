import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getBitcoinPriceHistory } from '../utils/api';
import { calculatePotentialProfit } from '../utils/calculations';
import { formatCurrency, formatDate } from '../utils/formatters';
import { BitcoinPrice, CalculatorState } from '../types';
import { DateInput } from './common/DateInput';
import { Button } from './common/Button';

interface Props {
  state: CalculatorState;
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}

export function WhatIfCalculator({ state, setState }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [priceData, setPriceData] = useState<BitcoinPrice[]>([]);
  const [initialBitcoinPrice, setInitialBitcoinPrice] = useState<number | null>(null);
  const [finalBitcoinPrice, setFinalBitcoinPrice] = useState<number | null>(null);

  const handleCalculate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Ensure end of day for date range
      const startDate = new Date(state.startDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(state.endDate);
      endDate.setHours(23, 59, 59, 999);

      const prices = await getBitcoinPriceHistory(
        state.currency,
        startDate.toISOString(),
        endDate.toISOString()
      );
      
      if (prices.length < 2) {
        throw new Error('Insufficient price data for the selected date range');
      }
      
      const initialPrice = prices[0].price;
      const finalPrice = prices[prices.length - 1].price;
      
      setInitialBitcoinPrice(initialPrice);
      setFinalBitcoinPrice(finalPrice);
      setPriceData(prices);
      
      const profit = calculatePotentialProfit(
        state.investmentAmount,
        initialPrice,
        finalPrice
      );
      
      setResult(profit);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setResult(null);
      setPriceData([]);
      setInitialBitcoinPrice(null);
      setFinalBitcoinPrice(null);
    } finally {
      setLoading(false);
    }
  }, [state.currency, state.startDate, state.endDate, state.investmentAmount]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <DateInput
          selected={state.startDate}
          onChange={(date) => date && setState({ ...state, startDate: date })}
          label="Investment Date"
        />
        <DateInput
          selected={state.endDate}
          onChange={(date) => date && setState({ ...state, endDate: date })}
          minDate={state.startDate}
          label="Sell Date"
        />
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      <Button
        onClick={handleCalculate}
        disabled={loading}
        isLoading={loading}
        className="w-full mb-8"
      >
        Calculate Potential Profit
      </Button>

      {result !== null && initialBitcoinPrice !== null && finalBitcoinPrice !== null && !error && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">Initial Bitcoin Price</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(initialBitcoinPrice, state.currency)}
              </p>
            </div>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400 mb-1">Final Bitcoin Price</p>
              <p className="text-lg font-semibold text-white">
                {formatCurrency(finalBitcoinPrice, state.currency)}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 mb-8">
            <p className="text-lg text-gray-400">
              If you had invested{' '}
              <span className="font-semibold text-white">
                {formatCurrency(state.investmentAmount, state.currency)}
              </span>{' '}
              on {formatDate(state.startDate)} and sold on {formatDate(state.endDate)},
              you would have made a{' '}
              <span className={`font-semibold ${result >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {result >= 0 ? 'profit' : 'loss'} of {formatCurrency(Math.abs(result), state.currency)}
              </span>
            </p>
          </div>

          {priceData.length > 0 && (
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => format(new Date(date), 'MMM yyyy')}
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tickFormatter={(value) => formatCurrency(value, state.currency)}
                    stroke="#6B7280"
                    tick={{ fontSize: 12 }}
                    domain={['dataMin', 'dataMax']}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                    labelFormatter={(date) => format(new Date(date), 'MMM d, yyyy')}
                    formatter={(value: number) => [formatCurrency(value, state.currency), 'Price']}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#F97316"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  );
}