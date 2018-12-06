import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
  const { label, err, handler, type, value } = props
  return (
    <div className="form-group">
      {label && <div className="form-group__label">{label}</div>}
      <div className="form-group__input">
        <input
          type={type}
          value={value}
          onChange={e => handler(e.target.value)}
        />
      </div>
      {err && <div className="form-group__error">{err}</div>}
    </div>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  err: PropTypes.string,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
}
Input.defaultProps = {
  label: '',
  type: '',
  err: ''
}
export default Input
