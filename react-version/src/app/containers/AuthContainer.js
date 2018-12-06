import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthForm from '../components/AuthForm'
import { login, signup } from '../actions/UserActions'

class AuthContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: '',
        err: '',
        label: 'Enter your username'
      },
      password: {
        value: '',
        err: '',
        label: 'Enter your password',
        type: 'password'
      }
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.submit = this.submit.bind(this)
  }
  handlePassword(v) {
    this.setState(previousState => {
      const { password } = previousState
      return {
        error: '',
        password: {
          ...password,
          value: v,
          err: ''
        }
      }
    })
  }
  handleUsername(v) {
    this.setState(previousState => {
      const { username } = previousState
      return {
        error: '',
        username: {
          ...username,
          value: v,
          err: ''
        }
      }
    })
  }
  validate() {
    const { password, username } = this.state
    let passwordError, usernameError
    if (password.value.length < 6) {
      passwordError = 'Too short password'
    }
    if (username.value.length < 6) {
      usernameError = 'Too short username'
    }
    if (!passwordError && !usernameError) return
    this.setState({
      username: {
        ...username,
        err: usernameError
      },
      password: {
        ...password,
        err: passwordError
      }
    })
    return true
  }
  submit(e) {
    e.preventDefault()
    const validationResult = this.validate()
    if (validationResult) return
    const { username, password } = this.state
    const { signup, type, history, login } = this.props
    const payload = {
      username: username.value,
      password: password.value
    }
    this.setState({
      error: ''
    })
    const func = type === 'login' ? login : signup
    func(payload)
      .then(res => {
        if (res.status === 500 || res.data.success === false)
          throw new Error(res.data.message)
        if (type === 'signup') history.push(`/login`)
      })
      .catch(e => {
        this.setState({
          error: e.message || 'Error :('
        })
      })
  }
  render() {
    const { error, username, password } = this.state
    const { type } = this.props
    const submitText = type === 'login' ? 'Log in' : 'Sign Up'
    return (
      <AuthForm
        error={error}
        login={username}
        password={password}
        handleLogin={this.handleUsername}
        handlePassword={this.handlePassword}
        submit={this.submit}
        submitText={submitText}
      />
    )
  }
}
AuthContainer.propTypes = {
  type: PropTypes.string.isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
export default withRouter(
  connect(
    null,
    { login, signup }
  )(AuthContainer)
)
