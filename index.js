class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)


  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let ignoreList = ['the', 'a', 'an', 'but', 'of', 'and', 'for' , 'at' , 'by', 'from']
    let firstCap = Formatter.capitalize(string)
    let stringArray = firstCap.split(' ')
    let newArray = stringArray.map(x => ignoreList.includes(x) ? x : Formatter.capitalize(x))
    return newArray.join(' ')
  }
}
