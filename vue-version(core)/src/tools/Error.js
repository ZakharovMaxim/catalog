export default class Error {
  constructor (obj) {
    this.errors = obj
  }
  reset () {
    for (let key in this.errors) this.errors[key] = ''
  }
  has (key) {
    if (this.errors[key]) return !!this.errors[key]
  }
  get (key) {
    if (this.errors[key]) return this.errors[key]
  }
  add (errors) {
    this.errors = errors
  }
  setOne (key, value) {
    this.errors[key] = value
  }
  remove (key1, key2) {
    if (this.errors[key1]) this.errors[key1] = ''
    this.errors['form'] = ''
  }
  any () {
    let hasError = false
    for (let key in this.errors) {
      if (this.errors[key]) hasError = true
    }
    return hasError
  }
}
