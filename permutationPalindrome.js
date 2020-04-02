function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  let permutations = new Set();
  const innerRec = (str, chars) => {
    if (str.length === theString.length) {
      if (isPalindrome(str)) {
        permutations.add(str);
      }
      return;
    }
    
    for (let i = 0; i < chars.length; i++) {
      let newChars = chars.slice(0,i).concat(chars.slice(i+1));
      innerRec(str + chars[i], newChars);
    }
  }
  
  innerRec('', theString);
  if (permutations.size) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  
  return true;
}

function hasPalindromePermutation(theString) {
  let noPair = new Set();
  
  for (let char of theString) {
    if (noPair.has(char)) {
      noPair.delete(char);
    } else {
      noPair.add(char);
    }
  }
  
  return noPair.size <= 1
}