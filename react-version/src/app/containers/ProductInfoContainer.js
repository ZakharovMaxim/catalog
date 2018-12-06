import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProductInfo from '../components/ProductInfo'
import ProductReviewList from '../components/ProductReviewList'
import NewReviewContainer from './NewReviewContainer'
import FetchData from '../HOC/FetchData'
import { setProduct } from '../actions/ProductsActions'

class ProductInfoContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { product, token, auth } = this.props,
      { reviews } = product,
      avarageRate =
        reviews.reduce((avarage, current) => {
          return avarage + current.rate
        }, 0) / reviews.length
    return (
      <div className="productInfoContainer container">
        <ProductInfo data={product} avarageRate={avarageRate} />
        {auth && <NewReviewContainer id={product.id} token={token} />}
        <ProductReviewList reviews={product.reviews || []} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    product: state.products.product,
    auth: !!state.user.token,
    token: state.user.token
  }
}
ProductInfoContainer.propTypes = {
  token: PropTypes.string,
  auth: PropTypes.bool,
  product: PropTypes.shape({
    img: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.instanceOf(Date)
        ]),
        created_by: PropTypes.shape({
          id: PropTypes.number,
          email: PropTypes.string,
          username: PropTypes.string,
          first_name: PropTypes.string,
          last_name: PropTypes.string
        }).isRequired,
        text: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired
      })
    )
  }).isRequired
}
ProductInfoContainer.defaultProps = {
  token: '',
  auth: false
}
export default FetchData(connect(mapStateToProps)(ProductInfoContainer), {
  func: setProduct,
  getParam: 'id'
})
