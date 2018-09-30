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
  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }
    this.errors.reset()
  }
  data () {
    let r = Object.assign({}, this)
    delete r.originalData
    delete r.errors
    delete r.validations
    return r
  }
  validate (data) {
    const rules = this.validations

    for (let field in rules) {
      const rule = rules[field]
      if (rule.ignore) continue
      if (rule.max && data[field].length > rule.max) this.error.setOne(field, 'Максимальная длина ' + rule.max + ' символов')
      if (rule.max && data[field].length < rule.min) this.errors.setOne(field, 'Минимальная длина ' + rule.min + ' символов')
      if (rule.required && !data[field]) this.errors.setOne(field, 'Поле обязательно для заполнения')
      if (rule.confirm && data[rule.confirm.field] !== data[field]) this.errors.setOne(field, rule.confirm.errorMsg)
    }
  }
  submit (callback) {
    const data = this.data()
    Object.assign(this.originalData, this.data())
    this.validate(data)
    if (this.errors.any()) return
    return callback(data)
  }
}
