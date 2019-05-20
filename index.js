class Formatter {
  //add static methods here
  static capitalize(string) {
  	return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string) {
  	let stringArray = string.split(" ")
  	let excludedWords = ["a", "an", "but", "of", "and", "or", "at", "by", "from", "the", "for"]
  	let newArray = stringArray.map(function(word) {
  		if (stringArray[0] === word || !excludedWords.includes(word)){
  			return Formatter.capitalize(word)
  		}
  		else {
  			return word
  		}
  	})
  	return newArray.join(" ")
  }
}