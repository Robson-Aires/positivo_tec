import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './components/home/home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'

const App = () => {
  return (
    <>
  <Router>
  <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/Courses' exact component={CourseHome} />
    </Switch>
  </Router>
    </>
  )
}

export default App