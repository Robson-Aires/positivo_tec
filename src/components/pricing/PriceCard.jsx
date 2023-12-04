import React from 'react'
import { price } from '../../dummydata'

const PriceCard = () => {
  return (
    <>
    {price.map((val)=>(
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
                {val.price}
            </h1>
            <p>{val.desc}</p>
            <a href="https://www.positivotecnologia.com.br/nosso-jeito/">
            <button className='outline-btn'>SAIBA MAIS</button>
            </a>
        </div>
    ))}
    </>
  )
}

export default PriceCard