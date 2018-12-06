import React from 'react'
import PropTypes from 'prop-types'
import ProductRate from './ProductRate'

const ProductInfo = props => {
  const { data, avarageRate } = props,
    { img, title, text } = data
  return (
    <div className="productInfoBlock">
      <div className="productInfoBlock__img">
        <img src={img} alt="" />
      </div>
      <div className="productInfoBlock__text">
        <div className="productInfoBlock__title">{title}</div>
        <div className="productInfoBlock__description">{text}</div>
        <div className="productInfoBlock__rate">
          <span>Рейтинг:</span>
          <ProductRate rate={avarageRate} />
        </div>
      </div>
    </div>
  )
}
ProductInfo.propTypes = {
  avarageRate: PropTypes.number,
  data: PropTypes.shape({
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}
ProductInfo.defaultProps = {
  avarageRate: 0
}
export default ProductInfo
