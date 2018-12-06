import Form from '@/tools/Form'
const settings = {
  field1: {
    required: true,
    min: 6,
    max: 10
  },
  field2: {
    confirm: {
      field: 'field1',
      errorMsg: 'Не совпадают поля'
    }
  },
  field3: {
    confirm: {
      field: 'field1'
    }
  }
}
describe('Form.js', () => {
  it('set correctly data', () => {
    const form = new Form(settings)
    expect(form.field1).to.equal('')
    expect(form.field2).to.equal('')
    form['field1'] = ''
    form.submit()
    expect(form.errors.get('field1')).to.equal('Поле обязательно для заполнения')
    form['field1'] = '123456789abc'
    form.submit()
    expect(form.errors.get('field2')).to.equal('Не совпадают поля')
    expect(form.errors.get('field3')).to.equal('Поля не совпадают')
    expect(form.errors.get('field1')).to.equal('Максимальная длина 10 символов')
  })
})
