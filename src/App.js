//

import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import logo from './logo.svg'
import './App.css'

var timerData = observable({ secondsPassed: 0 })
setInterval(() => timerData.secondsPassed++, 1000)

@observer
class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React :)</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Timer timerData={timerData} />
        </p>
      </div>
    )
  }
}

// const Timer = observer(({ timerData }) => (
//   <span>Seconds passed: {timerData.secondsPassed}</span>
// ))

@observer
class Timer extends Component {
  @observable
  secondsPassed = 0

  componentWillMount () {
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }

  render () {
    return (<span>Seconds passed: {this.secondsPassed}</span>)
  }
}


export default App
