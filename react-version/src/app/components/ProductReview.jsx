import React from 'react'
import PropTypes from 'prop-types'
import ProductRate from './ProductRate'

const ProductReview = props => {
  const { created_at, created_by, text, rate } = props,
    { username } = created_by,
    date = new Intl.DateTimeFormat('en-GB').format(new Date(created_at))
  return (
    <div className="product-review">
      <div className="product-review__name">{username}</div>
      <div className="product-review__date">{date}</div>
      <div className="product-review__text">{text}</div>
      <div className="product-review__rate">
        <ProductRate rate={rate} />
      </div>
    </div>
  )
}
ProductReview.propTypes = {
  created_at: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  created_by: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string
  }).isRequired,
  text: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}
export default ProductReview
