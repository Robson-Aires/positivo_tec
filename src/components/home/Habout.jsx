import React from 'react'
import Title from '../common/title/Title'
import { coursesCard } from '../../dummydata'
import { imagens } from '../../dummydata'
import { positivo2 } from '../../dummydata'
import OnlineCourse from '../allcourses/OnlineCourse'
import './res.css'

const Habout = () => {
    const handleSaibaMaisClick = () => {
        window.location.href = '/courses';
      };
  return (
    <>
    <section className="homeAbout">
        <div className="container">
            <Title subtitle='POSITIVO TECNOLOGIA' title='SAIBA MAIS SOBRE AS NOSSAS ATITUDES'/>
        <div className="coursesCard">
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
                    <button className="outline-btn" onClick={handleSaibaMaisClick}>SAIBA MAIS</button>
                </div>
            )})}
        </div>
      </div>
    </div>
    </section>
<OnlineCourse />
    </>
  )
}

export default Habout