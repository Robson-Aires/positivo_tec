import React from 'react'
import Title from '../common/title/Title'
import { coursesCard } from '../../dummydata'
import { imagens } from '../../dummydata'
import { imagens2 } from '../../dummydata'

const Habout = () => {
  return (
    <>
    <section className="homeAbout">
        <div className="container">
            <Title subtitle='our courses' title='explore our popular online courses'/>
        <section className="coursesCard">
        <div className="grid2">
            {coursesCard.slice(0, 3).map((val) => {
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
                                            <img src={imagens2} alt="" />
                                        </div>
                                        <div className="para">
                                            <h4>{details.name}</h4>
                                        </div>
                                    </div>
                                    <span>{details.totalTime}</span>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="price">
                            <h3>
                                {val.priceAll} / {val.pricePer}
                            </h3>
                    </div>
                    <button className="outline-btn">enrol now</button>
                </div>
            )})}
        </div>
    </section>
        </div>
    </section>
    </>
  )
}

export default Habout