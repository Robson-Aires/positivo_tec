import React from 'react'
import Title from '../common/title/Title'
import {homeAbout} from '../../dummydata.js'
import AWrapper from './AWrapper.jsx'
import './about.css'

const AboutCard = () => {
  return (
    <>
     <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img
                src="https://scintillating-smakager-860376.netlify.app/images/about.webp"
                alt=""
                />
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning expertise' />
                <div className="items">
                    {homeAbout.map((val) => (
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" /> 
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     </section>
     <AWrapper />
    </>
  )
}

export default AboutCard