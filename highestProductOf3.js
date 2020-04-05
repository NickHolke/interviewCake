function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Must be at least 3 integers');
  }
  // Calculate the highest product of three numbers
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = lowest * highest;
  let lowestProductOf2 = lowest * highest;
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]
  
  for (let i = 2; i < arrayOfInts.length; i++) {
    let currentInt = arrayOfInts[i];
    
    highestProductOf3 = Math.max(
      highestProductOf3, 
      currentInt * highestProductOf2,
      currentInt * lowestProductOf2
    );
    
    highestProductOf2 = Math.max(
      highestProductOf2, 
      currentInt * highest,
      currentInt * lowest
    );
    
    lowestProductOf2 = Math.min(
      lowestProductOf2, 
      currentInt * lowest,
      currentInt * highest
    );
    
    highest = Math.max(currentInt, highest)
    lowest = Math.min(currentInt, lowest)
  }
  
  return highestProductOf3;
}