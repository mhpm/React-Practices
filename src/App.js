import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Views from './views'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="container">
            <br />
            <Route exact path="/" component={Views.Home} />
            <Route path="/weather" component={Views.Weather} />
            <Route path="/todo" component={Views.Todo} />
            <Route exact path="/posts" component={Views.Posts} />
            <Route path="/posts/:post_id" component={Views.PostEdit} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
