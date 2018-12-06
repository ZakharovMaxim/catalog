import React from 'react'

function withProps(Component, props) {
  const result = {}
  result[Component.name] = function () {
    return <Component {...props} />
  }
  return result[Component.name]
}

export default withProps
