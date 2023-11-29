import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'
import image from './images/o1.1.png'
import image2 from './images/o10.png'



const OnlineCourse = () => {
  return (
    <>
        <section className="online">
            <div className="container">
                <Title subtitle='COURSES' title='Browse r online Courses' />

                <div className="content grid3">
                    {online.map((val) => (
                        <div className="box">
                            <div className="img">
                                <img src={image2} alt="" />
                                <img src={image} alt="" className='show' />
                            </div>
                            <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourse