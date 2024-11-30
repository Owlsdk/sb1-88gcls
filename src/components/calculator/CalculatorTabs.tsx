import React from 'react';
import { CalculatorTab } from '../../types';

interface CalculatorTabsProps {
  activeTab: CalculatorTab;
  onTabChange: (tab: CalculatorTab) => void;
}

export function CalculatorTabs({ activeTab, onTabChange }: CalculatorTabsProps) {
  return (
    <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
      <button
        className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base whitespace-nowrap ${
          activeTab === 'whatif'
            ? 'text-orange-500 border-b-2 border-orange-500'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => onTabChange('whatif')}
      >
        What If Calculator
      </button>
      <button
        className={`px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base whitespace-nowrap ${
          activeTab === 'roi'
            ? 'text-orange-500 border-b-2 border-orange-500'
            : 'text-gray-400 hover:text-gray-200'
        }`}
        onClick={() => onTabChange('roi')}
      >
        ROI Calculator
      </button>
    </div>
  );
}