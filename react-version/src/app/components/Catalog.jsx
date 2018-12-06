import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const Catalog = props => {
  const { items } = props
  return (
    <div className="product-list container">
      {items.map(item => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  )
}
Catalog.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired
}
export default Catalog
