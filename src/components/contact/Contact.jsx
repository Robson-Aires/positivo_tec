import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.0292731321656!2d-49.33192712486595!3d-25.504070235826077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce2d4025d155d%3A0x4b206238c4754fb6!2sR.%20Jo%C3%A3o%20Bettega%2C%205200%20-%20Port%C3%A3o%2C%20Curitiba%20-%20PR%2C%2081350-000!5e0!3m2!1spt-BR!2sbr!4v1701367578884!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
      <>
        <Back title='Contato' />
        <section className='contact padding'>
          <div className='container shadow flexSB'>
            <div className='left row'>
              <iframe src={map} title='positivo'></iframe>
            </div>
            <div className='right row'>
              <h1>Contato</h1>
              <p>Estamos abertos para qualquer sugestão ou apenas para bater um papo</p>
  
              <div className='items grid2'>
                <div className='box'>
                  <h4>Endereço:</h4>
                  <p>R. João Bettega, 5200 - Portão</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p>robsonaires@outlook.com.br</p>
                </div>
                <div className='box'>
                  <h4>TELEFONE:</h4>
                  <p> + 1235 2355 98</p>
                </div>
              </div>
  
              <form action=''>
                <div className='flexSB'>
                  <input type='text' placeholder='nome' className='contact-input' />
                  <input type='email' placeholder='Email' className='contact-input' />
                </div>
                <input type='text' placeholder='assunto' className='contact-input' />
                <textarea cols='30' rows='10' className='contact-input'>
                  Digite sua mensagem aqui...
                </textarea>
                <button className='primary-btn'>ENVIAR MENSAGEM</button>
              </form>
  
              <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Contact