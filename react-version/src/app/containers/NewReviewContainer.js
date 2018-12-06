import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NewReview from '../components/NewReview'
import { newReview } from '../actions/ProductsActions'

class NewReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      selected: 0,
      text: '',
      error: null,
      loading: false,
      success: null
    }
    this.hover = this.hover.bind(this)
    this.select = this.select.bind(this)
    this.out = this.out.bind(this)
    this.handleText = this.handleText.bind(this)
    this.submit = this.submit.bind(this)
  }
  setError(error = 'Error') {
    this.setState({
      error,
      loading: false
    })
  }
  setLoading(loading = false) {
    this.setState({
      loading: loading,
      error: null
    })
  }
  hover(n) {
    this.setState(previousState => {
      let current = previousState.selected > n ? previousState.selected : n
      return {
        current
      }
    })
  }
  select(n) {
    this.setState(previousState => {
      let selected = n === previousState.selected ? 0 : n
      return {
        selected,
        current: selected
      }
    })
  }
  out() {
    this.setState(previousState => ({
      current: previousState.selected
    }))
  }
  submit() {
    const { text, selected } = this.state,
      { newReview, id, token } = this.props
    if (!text) return this.setError('Text field is empty')
    this.setLoading(true)
    newReview(
      {
        text,
        rate: selected
      },
      id,
      token
    ).then(() => {
      this.setState({
        current: 0,
        selected: 0,
        text: '',
        error: null,
        loading: false,
        success: 'Review has been added'
      })
      setTimeout(() => {
        this.setState({
          success: null
        })
      }, 2000)
    }).catch(e => {
      if (e.response.status === 401) return
        this.setState({
          current: 0,
          selected: 0,
          text: '',
          error: e.message || 'cant add new review',
          loading: false,
          success: null
        })
      })
  }
  handleText(text) {
    this.setState({
      text
    })
  }
  render() {
    const { current, text, loading, error, success } = this.state
    return (
      <NewReview
        rate={current}
        out={this.out}
        select={this.select}
        hover={this.hover}
        handleText={this.handleText}
        text={text}
        submit={this.submit}
        loading={loading}
        error={error}
        success={success}
      />
    )
  }
}
NewReviewContainer.propTypes = {
  id: PropTypes.number.isRequired,
  token: PropTypes.string,
  newReview: PropTypes.func.isRequired
}
NewReviewContainer.defaultProps = {
  token: ''
}
export default connect(
  null,
  { newReview }
)(NewReviewContainer)
