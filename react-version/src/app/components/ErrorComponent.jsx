import React from 'react'
import PropTypes from 'prop-types'

const ErrorComponent = props => {
  const { message } = props
  return (
    <div className="error-component center-content">
      <div className="error-component__message">{message}</div>
    </div>
  )
}
ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired
}
export default ErrorComponent
