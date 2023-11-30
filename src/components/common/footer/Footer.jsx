import React from 'react'
import { blog } from '../../../dummydata'
import { teamm } from '../../../dummydata'
import './footer.css'

const footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>Newsletter -Stay tune and get the latedt update</h1>
            <span>far far away, behind the word mountains</span>
            </div>
        <div className="right row">
            <input type="text" placeholder='enter email address' />
        <i className="fa fa-paper-plane"></i>
        </div>
      </div>
    </section>

    <footer>
        <div className="container padding">
            <div className="box logo">
               <h1>ACADEMIA</h1>
               <span>online education & learning</span>
               <p>cdscsjcksbd dsicubsdiucs sdcbsiubc\l c\iusdbcli\sudcbu duyscsduyvczjhdc dsycbsducb  y\csuydcv\k sydcs</p>
               <i className="fab fa-facebook-f icon"></i>
               <i className="fab fa-instagram icon"></i>
               <i className="fab fa-twitter icon"></i>
               <i className="fab fa-youtube icon"></i>
            </div>
            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Quck Links</h3>
                <ul>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                </ul>
            </div>
          <div className="bxo">
            <h3>Recent Post</h3>
            {blog.slice(0,3).map((val) => (
                <div className="items flexSB">
                    <div className="img">
                    <img src={teamm} alt="" />
                    </div>
                    <div className="text">
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor="">{val.date}</label>
                        </span>
                        <h4>{val.title}</h4>
                    </div>
                </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a questions?</h3>
            <ul>
                <li>
                    <i className="fa fa-map"></i>
                    203 Fake ST. Mount View , san francisio california
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    +123 456 789
                </li>
                <li>
                    <i className="fa fa-paper-plane"></i>
                    example@gmail.com
                </li>
            </ul>
          </div>
        </div>
    </footer>
    <div className="legal">
        <p>Copywright @2023 All rights reserved | this template is made iwth
            <i className="fa fa-heart"></i> by robson
        </p>
    </div>
    </>
  )
}

export default footer