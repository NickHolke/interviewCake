function getPermutations(string) {

  // Generate all permutations of the input string
  if (string.length <= 1) {
    return new Set([string]);
  }
  
  const stringMinusLastChar = string.slice(0, string.length - 1);
  const lastChar = string[string.length - 1];
  
  const permutationsMinusChar = getPermutations(stringMinusLastChar);
  const permutations = new Set();
  
  permutationsMinusChar.forEach((permutationMinusChar) => {
    for (let pos = 0; pos <= permutationMinusChar.length; pos++) {
      const permutation = permutationMinusChar.slice(0, pos) + lastChar + 
                          permutationMinusChar.slice(pos)
      permutations.add(permutation);
    }
  })
  
  return permutations;
}