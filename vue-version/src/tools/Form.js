import Errors from './Error.js'
export default class Form {
  constructor (data) {
    this.originalData = data
    this.validations = []
    const errors = {}
    for (let field in data) {
      if (typeof data[field] === 'object') {
        this.validations[field] = data[field]
      }
      this[field] = ''
      errors[field] = ''
    }
    errors['form'] = ''
    this.errors = new Errors(errors)
  }
  /**
   * reset all form fields
   */
  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }
    this.errors.reset()
  }
  /**
   * return only data what should be sended on server
   */
  data () {
    let r = Object.assign({}, this)
    delete r.originalData
    delete r.errors
    delete r.validations
    return r
  }
  /**
   * change validation rule
   * @param {String} fieldName
   * @param {String} ruleName
   * @param {any} value
   */
  changeValidateRule (fieldName, ruleName, value) {
    this.validations[fieldName][ruleName] = value
  }
  /**
   * iterate all validations rules and add error if some fields have errors
   * @param {Object} data data to check
   */
  validate (data) {
    const rules = this.validations
    for (let field in rules) {
      const rule = rules[field]
      if (rule.ignore) continue
      if (rule.max && data[field].length > rule.max) this.errors.setOne(field, 'Максимальная длина ' + rule.max + ' символов')
      if (rule.max && data[field].length < rule.min) this.errors.setOne(field, 'Минимальная длина ' + rule.min + ' символов')
      if (rule.required && !data[field]) this.errors.setOne(field, 'Поле обязательно для заполнения')
      if (rule.confirm && data[rule.confirm.field] !== data[field]) this.errors.setOne(field, rule.confirm.errorMsg || 'Поля не совпадают')
    }
  }
  /**
   * validate all fields, check for errors and exec callback
   * @param {Function} callback
   * @returns {any}
   */
  submit (callback) {
    const data = this.data()
    Object.assign(this.originalData, this.data())
    this.validate(data)
    if (this.errors.any()) return
    return callback(data)
  }
}
