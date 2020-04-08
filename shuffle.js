function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  // Shuffle the input in place
  for (let i = 0; i < array.length - 1; i++) {
    let randomIdx = getRandom(i, array.length - 1);
    
    if (randomIdx !== i) {
      let temp = array[i];
      array[i] = array[randomIdx];
      array[randomIdx] = temp;
    }
  }
}