import React from 'react'
import './price.css'
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import Faq from './Faq.jsx'

const Price = () => {
  return (
    <>
    <Back title='Vivência Cultural'/>
    <section className="price padding">
        <div className="container grid">
    <PriceCard />            
        </div>
    </section>
    <Faq />
    </>
  )
}

export default Price