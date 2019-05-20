class Formatter {
  //add static methods here

  static capitalize(string){
    string = (string.charAt(0).toUpperCase()) + string.slice(1)
    return string
  }
  static sanitize(string){
    return (string.replace(/[^-,'A-Za-z0-9 ]+/g, ''))
  }
  static titleize(string){
    let non_capitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    var array = string.split(' ')
    var new_array = array.map( function(element){
      if (non_capitalize.includes(array[0])){
        array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1)
        return array[0]
      }
      else if (!non_capitalize.includes(element)){
        element = element.charAt(0).toUpperCase() + element.slice(1)
        return element
      }
      else{
        return element
      }
    })
    debugger
    return (new_array.join(' '))
  }
}
