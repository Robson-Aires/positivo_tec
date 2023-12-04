import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'
import image from './images/positivo.jpeg'
import image2 from './images/positivo.jpeg'



const OnlineCourse = () => {
  return (
    <>
        <section className="online">
            <div className="container">
                <Title subtitle='Positivo tecnologia' title='conheça nossos serviços' />

                <div className="content grid3">
                    {online.map((val) => (
                        <div className="box">
                            <div className="img">
                                <img src={image2} alt="" />
                                <img src={image} alt="" className='show' />
                            </div>
                            <h1>{val.courseName}</h1>
                            <a href="https://www.positivotecnologia.com.br/">

                            <span>saiba mais</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourse