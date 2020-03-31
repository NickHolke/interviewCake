function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
  let takeOutLength = takeOutOrders.length, dineInLength = dineInOrders.length,
      totalLength = takeOutLength + dineInLength, idx1 = 0, idx2 = 0, idx3 = 0;
  
  if (totalLength !== servedOrders.length) return false;
  
  while (idx1 + idx2 < totalLength) {
    if (idx1 < takeOutLength && (takeOutOrders[idx1] <= dineInOrders[idx2] || idx2 === dineInLength)) {
      if (takeOutOrders[idx1] !== servedOrders[idx3]) return false;
      idx1++;
      idx3++;
    } else {
      if (dineInOrders[idx2] !== servedOrders[idx3]) return false;
      idx2++;
      idx3++;
    }
  }
  

  return true;
}