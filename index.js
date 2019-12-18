  class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9' -]/g, '' )
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let wordArray = sentence.split( " " );
    for (let n = 0; n < wordArray.length; n++) {
      if (n == 0) {
        result.push(this.capitalize( wordArray[n]))
      } else {
        if (exceptions.includes( wordArray[ n ])) {
          result.push(wordArray[n])
        } else {
          result.push(this.capitalize(wordArray[n]))
        }
      }

    }
    return result.join(" ");
  }
}