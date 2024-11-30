import React, { useState } from 'react';
import { WhatIfCalculator } from './WhatIfCalculator';
import { ROICalculator } from './ROICalculator';
import { CalculatorState } from '../types';
import { CalculatorHeader } from './calculator/CalculatorHeader';
import { CalculatorTabs } from './calculator/CalculatorTabs';
import { CalculatorInputs } from './calculator/CalculatorInputs';

const initialState: CalculatorState = {
  investmentAmount: 1000,
  currency: 'USD',
  startDate: new Date('2015-01-01'),
  endDate: new Date(),
  roiTarget: 20
};

export function Calculator() {
  const [activeTab, setActiveTab] = useState<'whatif' | 'roi'>('whatif');
  const [state, setState] = useState(initialState);

  const handleReset = () => {
    setState(initialState);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
      <CalculatorHeader onReset={handleReset} />
      <CalculatorInputs state={state} onChange={setState} />
      <CalculatorTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'whatif' ? (
        <WhatIfCalculator state={state} setState={setState} />
      ) : (
        <ROICalculator state={state} setState={setState} />
      )}
    </div>
  );
}