import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = props => {
  const { img, title, id } = props
  return (
    <div className="productCard">
      <div className="productCard__img">
        <img src={img} alt="" />
      </div>
      <div className="productCard__title">
        <Link to={`/product/${id}`}>{title}</Link>
      </div>
      <div className="productCard__action">
        <Link to={`/product/${id}`} className="button-primary">
          More
        </Link>
      </div>
    </div>
  )
}
ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
export default ProductCard
