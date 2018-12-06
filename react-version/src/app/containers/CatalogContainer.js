import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Catalog from '../components/Catalog'
import FetchData from '../HOC/FetchData'
import { setProducts } from '../actions/ProductsActions'

const CatalogContainer = props => {
  const { products } = props
  return <Catalog items={products} />
}
function mapStateToProps(state) {
  return {
    products: state.products.products
  }
}
CatalogContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      img: PropTypes.string.isRequired
    })
  ).isRequired
}
export default FetchData(connect(mapStateToProps)(CatalogContainer), {
  func: setProducts
})
