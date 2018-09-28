import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.scss'
class App extends React.Component {
  render () {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))