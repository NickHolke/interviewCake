function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1) {
    throw new Error('Need at least 2 prices');
  }
  // Calculate the max profit
  
  // Keep track of max profit and starting stock value
  let max = -Infinity, minPrice = stockPrices[0];
  
  for (let i = 1; i < stockPrices.length; i++) {
    let currentPrice = stockPrices[i];
    
   max =  Math.max(max, currentPrice - minPrice);
   minPrice = Math.min(minPrice, currentPrice);
  }
  
  return max;
}
