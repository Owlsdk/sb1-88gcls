export interface CurrencyOption {
  code: string;
  symbol: string;
  name: string;
}

export interface CalculatorState {
  investmentAmount: number;
  currency: string;
  startDate: Date;
  endDate: Date;
  roiTarget: number;
}

export interface BitcoinPrice {
  date: string;
  price: number;
}

export type CalculatorTab = 'whatif' | 'roi';

export type ROITarget = 10 | 20 | 50;