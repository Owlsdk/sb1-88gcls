import React from 'react';
import { CurrencySelector } from '../CurrencySelector';
import { CalculatorState } from '../../types';

interface CalculatorInputsProps {
  state: CalculatorState;
  onChange: (state: CalculatorState) => void;
}

export function CalculatorInputs({ state, onChange }: CalculatorInputsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Investment Amount
        </label>
        <div className="relative">
          <input
            type="number"
            value={state.investmentAmount}
            onChange={(e) => onChange({ ...state, investmentAmount: Number(e.target.value) })}
            className="block w-full rounded-lg bg-gray-900 border-gray-700 text-white pl-4 sm:pl-7 pr-8 sm:pr-12 py-2 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Currency
        </label>
        <CurrencySelector
          value={state.currency}
          onChange={(currency) => onChange({ ...state, currency })}
        />
      </div>
    </div>
  );
}