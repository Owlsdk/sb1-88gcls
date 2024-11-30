import React, { useState } from 'react';
import { getBitcoinPriceHistory } from '../utils/api';
import { estimateDaysToROI } from '../utils/calculations';
import { CalculatorState } from '../types';
import { Button } from './common/Button';

interface Props {
  state: CalculatorState;
  setState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}

const ROI_TARGETS = [10, 20, 50];

export function ROICalculator({ state, setState }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [estimatedDays, setEstimatedDays] = useState<number | null>(null);

  const handleCalculate = async () => {
    setLoading(true);
    setError(null);
    try {
      const prices = await getBitcoinPriceHistory(
        state.currency,
        new Date(Date.now() - 1080 * 24 * 60 * 60 * 1000).toISOString(),
        new Date().toISOString()
      );
      
      if (prices.length < 2) {
        throw new Error('Insufficient price data available for analysis');
      }

      const days = estimateDaysToROI(prices, state.roiTarget);
      setEstimatedDays(days);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setEstimatedDays(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <label className="block text-sm font-medium text-white mb-2">
          Target ROI
        </label>
        <div className="flex gap-4">
          {ROI_TARGETS.map((target) => (
            <button
              key={target}
              onClick={() => setState({ ...state, roiTarget: target })}
              className={`flex-1 py-2 px-4 rounded-lg ${
                state.roiTarget === target
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {target}%
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
          <p className="text-red-200">{error}</p>
        </div>
      )}

      <Button
        onClick={handleCalculate}
        disabled={loading}
        className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 mb-8"
      >
        {loading ? 'Calculating...' : 'Calculate Time to ROI'}
      </Button>

      {estimatedDays !== null && !error && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            {estimatedDays === -1 ? (
              <p className="text-lg text-gray-400">
                Based on historical data, the target ROI of {state.roiTarget}% was not achieved within the analyzed timeframe.
              </p>
            ) : (
              <p className="text-lg text-gray-400">
                Based on historical data, it takes approximately{' '}
                <span className="font-semibold text-orange-500">
                  {estimatedDays} days
                </span>{' '}
                to achieve a {state.roiTarget}% ROI.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}