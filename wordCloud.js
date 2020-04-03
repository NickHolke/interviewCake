class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {

    // Count the frequency of each word
    let startIdx = 0;
    let wordLength = 0;
    let regex = /[a-zA-Z']/;
    
    for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      
      if (i === inputString.length - 1) {
        if (regex.test(char)) {
          wordLength++;
        }
        
        if (wordLength > 0) {
          this.addToMap(inputString.slice(startIdx, startIdx + wordLength));
          wordLength = 0;
        }
      } else if (regex.test(char)) {
        if (wordLength === 0) {
          startIdx = i;
        }
        wordLength++;
      } else if (char === '-') {
        if (i + 1 < inputString.length && regex.test(inputString[i-1]) && regex.test(inputString[i+1])) {
          wordLength++;
        } else {
          if (wordLength > 0) {
            this.addToMap(inputString.slice(startIdx, startIdx + wordLength));
            wordLength = 0;
          }
        }
      } else {
        if (wordLength > 0) {
          this.addToMap(inputString.slice(startIdx, startIdx + wordLength));
          wordLength = 0;
        }
      } 
    }
  }
  
  addToMap(word) {
    let newCount;
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount)
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1
      this.wordsToCounts.set(word.toLowerCase(), newCount)
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.delete(this.capitalize(word));
      this.wordsToCounts.set(word, newCount);
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }
  
  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

}