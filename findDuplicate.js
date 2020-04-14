function findRepeat(numbers) {

  // Find a number that appears more than once
  let floor = 1;
  let ceiling = numbers.length - 1;
  
  
  while (floor < ceiling) {
    let midpoint = Math.floor((floor + ceiling) / 2);
    let lowFloor = floor;
    let lowCeiling = midpoint;
    let highFloor = midpoint + 1;
    let highCeiling = ceiling;
    
    let lowRangeLimit = lowCeiling - lowFloor + 1;
    let lowRangeItems = 0;
    
    numbers.forEach((number) => {
      if (number >= lowFloor && number <= lowCeiling) {
        lowRangeItems++;
      }
    })
    
    if (lowRangeItems > lowRangeLimit) {
      floor = lowFloor;
      ceiling = lowCeiling;
    } else {
      floor = highFloor;
      ceiling = highCeiling;
    }
  }
  
  return floor;
}
