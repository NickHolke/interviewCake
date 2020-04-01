function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let set = new Set();
  
  for (let i = 0; i < movieLengths.length; i++) {
    let movie = movieLengths[i];
    
    let matchingMovie = flightLength - movie;
    if (set.has(matchingMovie)) return true;
    
    set.add(movie);
  }
  
  return false;
}
