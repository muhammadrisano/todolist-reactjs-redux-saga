import React, { Component } from 'react'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact patch="/" Component={Home} />
        <Home />
      </Router>
    )
  }
}
export default App;