import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import OtherPage from './OtherPage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
