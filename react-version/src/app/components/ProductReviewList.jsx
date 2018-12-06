import React from 'react'
import PropTypes from 'prop-types'
import ProductReview from './ProductReview'

const ProductReviewList = props => {
  const { reviews } = props
  return (
    <div className="product-review-list">
      <div className="product-review-list__title">
        <span>Отзывы ({reviews.length})</span>
      </div>
      {reviews.map((review, i) => (
        <ProductReview {...review} key={i} />
      ))}
    </div>
  )
}
ProductReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      created_at: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ]),
      rate: PropTypes.number,
      product: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      created_by: PropTypes.shape({
        id: PropTypes.number,
        email: PropTypes.string,
        username: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string
      })
    })
  ).isRequired
}
export default ProductReviewList
