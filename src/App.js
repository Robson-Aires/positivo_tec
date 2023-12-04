import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home/home'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Team from './components/team/Team'
import Price from './components/pricing/Price'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'

const App = () => {
  return (
    <>
  <Router>
  <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/atitudes' exact component={CourseHome} />
      <Route path='/time' exact component={Team} />
      <Route path='/cultura' exact component={Price} />
      <Route path='/imprensa' exact component={Blog} />
      <Route path='/contato' exact component={Contact} />
    </Switch>
    <Footer />
  </Router>
    </>
  )
}

export default App