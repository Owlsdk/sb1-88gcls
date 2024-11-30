import React from 'react';
import { RotateCcw, Calculator as CalculatorIcon } from 'lucide-react';

interface CalculatorHeaderProps {
  onReset: () => void;
}

export function CalculatorHeader({ onReset }: CalculatorHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <CalculatorIcon className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Bitcoin Investment Calculator
        </h2>
      </div>
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
      >
        <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
        Reset
      </button>
    </div>
  );
}