import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './components/home/home'

const App = () => {
  return (
    <>
  <Router>
  <Header />
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
    </>
  )
}

export default App