import React from 'react';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Calculator as CalculatorIcon, LineChart, Target } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-6 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 px-4">
          Bitcoin Investment Calculator - Free What if and ROI Tool
        </h1>
        
        <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base px-4">
          Use our comprehensive Bitcoin investment calculator to analyze potential returns and make informed investment decisions. Whether you want to calculate potential profits from past investments or estimate time to reach your return on investment and profit goals, our calculator has you covered.
        </p>

        <Calculator />

        <section className="mt-12 sm:mt-16 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            How The Bitcoin Investment Calculator Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <CalculatorIcon className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Investment Analysis</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Enter your investment amount and select your preferred currency to start analyzing potential returns.
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <LineChart className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Historical Data</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                View comprehensive price history and calculate potential profits based on actual market data.
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
              <Target className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">ROI Targets</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Set return on investment goals and estimate the time needed to achieve them based on historical trends.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            When Investing Bitcoin (BTC)
          </h2>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            <p className="text-gray-400 mb-4">
              Bitcoin investment calculators are online tools designed to make the process of estimating potential profits or losses from Bitcoin investments straightforward and accessible. By processing various input data, these calculators simplify the task of calculating returns, enabling users to focus on strategic planning with a bitcoin profit calculator.
            </p>
            <p className="text-gray-400 mb-4">
              For accurate results, it's crucial to enter precise information, including the investment amount, buy price, sell price, and any applicable fees. Misleading or inaccurate data can produce unreliable results, so careful data entry is essential.
            </p>
            <p className="text-gray-400">
              Once the data is inputted, investors must analyze the output carefully to make informed decisions about their Bitcoin investments.
            </p>
          </div>
        </section>

        <section className="mt-12 sm:mt-16 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Using a BTC Investment Calculator
          </h2>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            <p className="text-gray-400 mb-4">
              Bitcoin investment calculators are online tools designed to make the process of estimating potential profits or losses from Bitcoin investments straightforward and accessible. By processing various input data, these calculators simplify the task of calculating returns, enabling users to focus on strategic planning with a bitcoin profit calculator.
            </p>
            <p className="text-gray-400 mb-4">
              For accurate results, it's crucial to enter precise information, including the investment amount, buy price, sell price, and any applicable fees. Misleading or inaccurate data can produce unreliable results, so careful data entry is essential.
            </p>
            <p className="text-gray-400 mb-4">
              Once the data is inputted, investors must analyze the output carefully to make informed decisions about their Bitcoin investments.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Your Investment Data</h3>
            <p className="text-gray-400">
              Accurate profit calculations require inputting critical data into the crypto investment calculator. This includes the total capital invested, buy and sell prices, and fees incurred during transactions to determine the crypto profit calculator and crypto profit.
            </p>
            <p className="text-gray-400 mt-4">
              Accurate data entry involves understanding the full scope of your investment. Careful input of all relevant details ensures the calculator provides a reliable estimate of potential profits or losses, supporting informed investment decisions.
            </p>
          </div>
        </section>

        <section className="mt-12 sm:mt-16 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Strategies to Maximize Bitcoin Profits
          </h2>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            <p className="text-gray-400 mb-4">
              Maximizing Bitcoin profits involves strategic approaches and tools. With Bitcoin offering an average annualized return of over 68.3% in the last decade, investors should adopt effective strategies and utilize advanced tools like Bitcoin investment calculators.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Dollar Cost Averaging (DCA)</h3>
            <p className="text-gray-400 mb-4">
              Dollar cost averaging (DCA) is a popular investment strategy where investors regularly invest a fixed amount in Bitcoin. This approach helps manage the volatility of Bitcoin by spreading out purchases over time, reducing the emotional stress associated with investing.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Setting Stop-Loss Orders</h3>
            <p className="text-gray-400 mb-4">
              Stop-loss orders are another effective strategy for protecting investments. These orders automatically sell a security when its price drops to a predetermined level, helping investors minimize potential losses.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Diversifying Your Crypto Portfolio</h3>
            <p className="text-gray-400">
              Diversifying your crypto portfolio is an essential strategy to manage risk and tap into potential market growth. By spreading investments across various cryptocurrencies, investors can reduce the impact of a poor-performing asset on their overall portfolio.
            </p>
          </div>
        </section>

        <FAQ />

        <div className="mt-12 sm:mt-16 px-4 text-center">
          <a
            href="https://beto.com/crypto-casinos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-red-900 transition-colors duration-300 rounded-lg shadow-lg"
          >
            <span className="text-white font-bold text-lg">MADE BY BETO SLOTS</span>
          </a>
        </div>

        <section className="mt-12 sm:mt-16 px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Historical Performance of Bitcoin Investments
          </h2>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            <p className="text-gray-400 mb-4">
              The historical performance of Bitcoin investments reveals significant growth potential. Over the past 13 years, Bitcoin has shown a compound annual growth rate of 103.42%, making it a valuable asset for future investments.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Historical Price Trends</h3>
            <p className="text-gray-400 mb-4">
              Bitcoin's historical price trends offer valuable insights into its market behavior. The most profitable year for Bitcoin was 2014, with an incredible increase of 7,310.21%.
            </p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Notable Profitable Years</h3>
            <p className="text-gray-400">
              Bitcoin has seen various profitable years, with 2013 being the most notable in relative terms. Several factors, including a surge in investor interest and mainstream media coverage, contributed to the profitability of that year.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}