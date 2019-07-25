class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    let sanitizedString = []
    let arrayString = string.split('')
    for (let i = 0; i < arrayString.length; i++)
      if (arrayString[i].match(/^[a-zA-Z0-9 '-]*$/)) {
        sanitizedString.push(arrayString[i])
      }
    return sanitizedString.join('')
  }

  static titleize(sentence) {
    let exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let sentenceArray = sentence.split(" ")
    let newSentence = []
    for (let i = 0; i < sentenceArray.length; i++)
      if (!exceptions.includes(sentenceArray[i])) {
        newSentence.push(sentenceArray[i][0].toUpperCase() + sentenceArray[i].substr(1))
      } else {
        newSentence.push(sentenceArray[i])
      }
    let result = newSentence.join(' ')
    return result[0].toUpperCase() + result.substr(1)
  }

}
