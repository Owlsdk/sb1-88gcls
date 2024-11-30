export function calculateROI(initialPrice: number, finalPrice: number): number {
  return ((finalPrice - initialPrice) / initialPrice) * 100;
}

export function calculatePotentialProfit(
  investmentAmount: number,
  initialPrice: number,
  finalPrice: number
): number {
  // Use precise decimal calculations
  const bitcoinAmount = Number((investmentAmount / initialPrice).toFixed(8));
  const finalValue = Number((bitcoinAmount * finalPrice).toFixed(2));
  return Number((finalValue - investmentAmount).toFixed(2));
}

export function estimateDaysToROI(
  priceHistory: { date: string; price: number }[],
  targetROI: number
): number {
  let totalDays = 0;
  let validPeriods = 0;

  for (let i = 0; i < priceHistory.length - 1; i++) {
    const startPrice = priceHistory[i].price;
    
    for (let j = i + 1; j < priceHistory.length; j++) {
      const currentROI = calculateROI(startPrice, priceHistory[j].price);
      
      if (currentROI >= targetROI) {
        totalDays += j - i;
        validPeriods++;
        break;
      }
    }
  }

  return validPeriods > 0 ? Math.ceil(totalDays / validPeriods) : -1;
}