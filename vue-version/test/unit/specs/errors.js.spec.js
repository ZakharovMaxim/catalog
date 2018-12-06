import Error from '@/tools/Error'
describe('Error.js', () => {
  it('set errors correctly', () => {
    const errors = new Error({})
    errors.setOne('password', 'password is reqired')
    expect(errors.get('password')).to.equal('password is reqired')
    errors.add({'login': 'this field is required'})
    expect(errors.get('login')).to.equal('this field is required')
    expect(errors.get('password')).to.equal(undefined)
  })
})
