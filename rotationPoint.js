function findRotationPoint(words) {

  // Find the rotation point in the vector
  let firstWord = words[0], floorIdx = 0, ceilIdx = words.length - 1;
  
  while (floorIdx < ceilIdx) {
    if (floorIdx + 1 === ceilIdx) {
      break;
    }
    
    let midIdx = Math.floor((ceilIdx + floorIdx) / 2);
    
    if (words[midIdx] >= firstWord) {
      floorIdx = midIdx;
    } else {
      ceilIdx = midIdx;
    }
  }

  return ceilIdx;
}