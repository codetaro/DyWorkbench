import React from 'react'
import ReactDOM from 'react-dom'

import './res/styles.css'
import Yunba3gTracker from './view/Yunba3gTracker'

function App () {
  return (
    <div className='App'>
      <Yunba3gTracker />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
