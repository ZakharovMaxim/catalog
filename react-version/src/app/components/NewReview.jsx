import React from 'react'
import PropTypes from 'prop-types'
import ProductRate from './ProductRate'

const NewReview = props => {
  const {
    success,
    error,
    out,
    select,
    hover,
    rate,
    text,
    loading,
    submit
  } = props
  return (
    <div className="new-review">
      {success && <div className="new-review__success">{success}</div>}
      {error && <div className="new-review__error">{error}</div>}
      <ProductRate
        rate={rate}
        out={out}
        select={select}
        hover={hover}
        dynamic
      />
      <div className="form-group">
        <div className="form-group__label">Enter review text</div>
        <div className="form-group__input">
          <textarea
            onChange={e => props.handleText(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-group__action">
          <input
            type="submit"
            className="button-primary"
            onClick={submit}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  )
}
NewReview.propTypes = {
  success: PropTypes.string,
  error: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleText: PropTypes.func.isRequired,
  select: PropTypes.func,
  hover: PropTypes.func,
  out: PropTypes.func,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  rate: PropTypes.number
}
NewReview.defaultProps = {
  loading: false,
  hover: null,
  select: null,
  out: null,
  rate: 0,
  success: null,
  error: null
}
export default NewReview
