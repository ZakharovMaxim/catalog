import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/UserActions'

class Logout extends React.Component {
  componentDidMount() {
    const { logout, history } = this.props
    logout()
    history.push('/')
  }
  render() {
    return <div>Logout</div>
  }
}
Logout.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}
export default withRouter(
  connect(
    null,
    { logout }
  )(Logout)
)
