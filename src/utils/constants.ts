export const BINANCE_API = 'https://api.binance.com/api/v3';

export const DATE_RANGE = {
  MIN: new Date('2015-01-01'),
  MAX: new Date(),
};

export const ROI_TARGETS = [10, 20, 50] as const;

export const ANALYSIS_PERIOD_DAYS = 1080; // 3 years for ROI analysis

export const INTERVALS = {
  DAILY: '1d',
  HOURLY: '1h',
} as const;

export const CURRENCY_PAIRS: Record<string, string> = {
  USD: 'BTCUSDT',
  EUR: 'BTCEUR',
  GBP: 'BTCGBP',
  DKK: 'BTCUSDT', // Using USDT as base for DKK
};