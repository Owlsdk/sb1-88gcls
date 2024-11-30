import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How accurate is the Bitcoin Investment Calculator?",
    answer: "Our Bitcoin Investment Calculator uses real-time and historical data from Binance, one of the world's largest cryptocurrency exchanges, ensuring high accuracy in calculations. However, please note that cryptocurrency markets are highly volatile, and past performance doesn't guarantee future results."
  },
  {
    question: "What is ROI and how is it calculated?",
    answer: "ROI (Return on Investment) is the percentage of profit or loss on your investment. It's calculated by taking the difference between the final value and initial investment, divided by the initial investment, and multiplied by 100. Our calculator uses historical Bitcoin price data to estimate the time needed to achieve your target ROI."
  },
  {
    question: "Why does the calculator start from January 2015?",
    answer: "We start from January 2015 to ensure reliable and consistent historical price data. This period covers Bitcoin's major market cycles and provides meaningful insights for investment analysis while maintaining data accuracy."
  },
  {
    question: "How often is the price data updated?",
    answer: "The calculator uses real-time price data from Binance for current prices and their historical database for past prices. Price information is fetched at the time of calculation to ensure the most up-to-date results."
  },
  {
    question: "Can I use this calculator for other cryptocurrencies?",
    answer: "Currently, this calculator is specifically designed for Bitcoin (BTC) investments. Bitcoin is the most established cryptocurrency with the most reliable historical data, making it ideal for accurate investment calculations."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(current =>
      current.includes(index)
        ? current.filter(i => i !== index)
        : [...current, index]
    );
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-white font-medium text-lg">{item.question}</h3>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="px-6 py-4 border-t border-gray-700">
                <p className="text-gray-400">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}