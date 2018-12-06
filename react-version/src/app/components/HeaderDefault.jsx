import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const HeaderDefault = props => {
  const { auth } = props,
    userActions = auth ? (
      <div className="user-actions">
        <Link to="/logout">Log out</Link>
      </div>
    ) : (
      <div className="user-actions">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    )
  return (
    <header className="header">
      <div className="header__fake" />
      <div className="header__content">
        <div className="container">
          <div className="header__logo">
            <Logo />
          </div>
          {userActions}
        </div>
      </div>
    </header>
  )
}
HeaderDefault.propTypes = {
  auth: PropTypes.bool
}
HeaderDefault.defaultProps = {
  auth: false
}
export default HeaderDefault
