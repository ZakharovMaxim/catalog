import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, withRouter, Switch } from 'react-router-dom'
import HeaderDefault from '../components/HeaderDefault'
import MainPage from '../components/MainPage'
import ProductInfoContainer from './ProductInfoContainer'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import ErrorComponent from '../components/ErrorComponent'
import Logout from './Logout'
import { initializeUser } from '../actions/UserActions'
import NotAuth from '../HOC/NotAuth'
import withProps from '../HOC/withProps'

class App extends Component {
  componentDidMount() {
    const { initializeUser } = this.props
    initializeUser()
  }
  render() {
    const { token } = this.props
    return (
      <div className="App">
        <HeaderDefault auth={!!token} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/product/:id" component={ProductInfoContainer} />
          <Route exact path="/signup" component={NotAuth(SignUpPage, token)} />
          <Route exact path="/login" component={NotAuth(LoginPage, token)} />
          <Route exact path="/logout" component={Logout} />
          <Route
            path="/"
            component={withProps(ErrorComponent, {
              message: '404 page not found'
            })}
          />
        </Switch>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    token: state.user.token
  }
}
App.propTypes = {
  token: PropTypes.string,
  initializeUser: PropTypes.func.isRequired
}
App.defaultProps = {
  token: ''
}
export default withRouter(
  connect(
    mapStateToProps,
    { initializeUser }
  )(App)
)
