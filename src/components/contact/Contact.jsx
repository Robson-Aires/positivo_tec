import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.0292731321656!2d-49.33192712486595!3d-25.504070235826077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce2d4025d155d%3A0x4b206238c4754fb6!2sR.%20Jo%C3%A3o%20Bettega%2C%205200%20-%20Port%C3%A3o%2C%20Curitiba%20-%20PR%2C%2081350-000!5e0!3m2!1spt-BR!2sbr!4v1701367578884!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
      <>
        <Back title='Contact us' />
        <section className='contact padding'>
          <div className='container shadow flexSB'>
            <div className='left row'>
              <iframe src={map} title='positivo'></iframe>
            </div>
            <div className='right row'>
              <h1>Contact us</h1>
              <p>We're open for any suggestion or just to have a chat</p>
  
              <div className='items grid2'>
                <div className='box'>
                  <h4>ADDRESS:</h4>
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p> info@yoursite.com</p>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <p> + 1235 2355 98</p>
                </div>
              </div>
  
              <form action=''>
                <div className='flexSB'>
                  <input type='text' placeholder='Name' />
                  <input type='email' placeholder='Email' />
                </div>
                <input type='text' placeholder='Subject' />
                <textarea cols='30' rows='10'>
                  Create a message here...
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
              </form>
  
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Contact