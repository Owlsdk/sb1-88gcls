import React from 'react';
import { CurrencyOption } from '../types';
import { CURRENCY_PAIRS } from '../utils/constants';

const currencies: CurrencyOption[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'DKK', symbol: 'kr', name: 'Danish Krone' },
].filter(currency => currency.code in CURRENCY_PAIRS);

interface Props {
  value: string;
  onChange: (currency: string) => void;
}

export function CurrencySelector({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full rounded-lg bg-gray-900 border-gray-700 text-white pl-4 pr-8 py-2 focus:border-orange-500 focus:ring-orange-500"
    >
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code} - {currency.name} ({currency.symbol})
        </option>
      ))}
    </select>
  );
}