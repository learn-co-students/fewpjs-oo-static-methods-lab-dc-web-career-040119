class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence){
    //place the words that are not to be capitalized within a array called exceptions
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    //each word that is not in the exceptions array above will be transformed with titlecase.
    // make an empty array called results so that the transformed words can be pushed into it.
    let result = []

    //split each word into an array. look for the space to know when to split. then iterate through each word in the array
    // using a for loop
    let arrayOfWords = sentence.split(' ')
    for (let i = 0; i < arrayOfWords.length; i++) {
      if (i == 0){ //if at first char of word, then capitalize
        result.push(this.capitalize(arrayOfWords[i]))
      } else {
        if (exceptions.includes(arrayOfWords[i])) { //if one of the items in the exceptions array is the word, it is pushed onto the array with no further action
          result.push(arrayOfWords[i])
        } else {
          result.push(this.capitalize(arrayOfWords[i]))
        }
      }
    }
    return result.join(' ') //put the words back together in a sentence and separate with a space
  }
}
