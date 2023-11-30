import React from 'react'
import Hero from './hero/hero'
import AboutCard from '../about/AboutCard'
import Habout from './Habout'
import Test from './testimonal/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'

const home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <Habout />
        <Test />
        <Hblog />
        <Hprice />
    </>
  )
}

export default home