import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoadingComponent from '../components/LoadingComponent'
import ErrorComponent from '../components/ErrorComponent'

export default function FetchData(Component, options) {
  class FetchingComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        error: ''
      }
    }
    componentDidMount() {
      this.fetch()
    }
    fetch() {
      // additional params for functions
      const { match, func } = this.props
      let param
      if (options.getParam) {
        param = match.params[options.getParam]
      }
      // exec function
      func(param)
        .then(() => {
          this.setState({
            loading: false,
            error: ''
          })
        })
        .catch(e => {
          this.setState({
            loading: false,
            error: e.message || 'Error'
          })
        })
    }
    render() {
      const { error, loading } = this.state
      // which component should be rendered
      const willRender = loading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : (
        <Component />
      )
      return willRender
    }
  }
  const func = options.func
  FetchingComponent.propTypes = {
    func: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }
  return withRouter(
    connect(
      null,
      { func }
    )(FetchingComponent)
  )
}
