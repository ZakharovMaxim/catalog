import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const AuthForm = props => {
  const {
      submit,
      error,
      login,
      password,
      handleLogin,
      handlePassword,
      submitText
    } = props,
    disabledForm = error || password.err || login.err
  return (
    <div className="form-page container">
      <div className="form-page__content">
        <div className="form-page__title">{submitText}</div>
        <form action="" onSubmit={submit}>
          {error && <div className="form-group__error">{error}</div>}
          <Input {...login} handler={handleLogin} />
          <Input {...password} handler={handlePassword} />
          <div className="form-group__action">
            <input
              type="submit"
              className="button-primary"
              value={submitText}
              disabled={disabledForm}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
AuthForm.propTypes = {
  login: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }).isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
}
AuthForm.defaultProps = {
  error: ''
}
export default AuthForm
