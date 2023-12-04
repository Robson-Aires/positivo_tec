import React from 'react'
import { coursesCard } from '../../dummydata'
import { imagens } from '../../dummydata'
import { positivo2 } from '../../dummydata'
import './course.css'


const CoursesCard = () => {
  return (
    <>
    <section className="coursesCard">
        <div className="container grid2">
            {coursesCard.map((val) => {
                return (
                <div key={val.id} className="items">
                    <div className="content flex">
                        <div className="left">
                            <div className="img">
                                <img src={imagens} alt="" />
                            </div>
                        </div>
                        <div className="text">
                            <h1>{val.coursesName}</h1>
                            <div className="rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <label htmlFor="">(5.0)</label>
                            </div>
                            <div className="details">
                                {/*  */}
                                {val.courTeacher.map((details) => (
                                    <>
                                    <div className="box">
                                        <div className="dimg">
                                            <img src={positivo2} alt="" />
                                        </div>
                                        <div className="para">
                                            <h4>{details.name}</h4>
                                        </div>
                                    </div>
                                    {/* <span>{details.totalTime}</span> */}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="price">
                            {/* <h3>
                                {val.priceAll} / {val.pricePer}
                            </h3> */}
                    </div>
                    <a href="https://www.positivotecnologia.com.br/nosso-jeito/">
                        <button className="outline-btn">Saiba Mais</button>
                    </a>
                </div>
            )})}
        </div>
    </section>
    </>
  )
}

export default CoursesCard