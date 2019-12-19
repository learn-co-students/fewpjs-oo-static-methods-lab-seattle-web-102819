class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(" ")
    let res = [];
    for(let i = 0; i < arr.length; i++) {
      if(i == 0) {
        res.push(this.capitalize(arr[i]))
      } else {
        if(except.includes(arr[i])) {
          res.push(arr[i])
        } else {
          res.push(this.capitalize(arr[i]))
        }
      }
    }
    return res.join(' ')
  }
}