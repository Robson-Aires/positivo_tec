import React from 'react';
import Title from '../common/title/Title';
import { homeAbout } from '../../dummydata.js';
import AWrapper from './AWrapper.jsx';
import './about.css';
import video from './video/positivo.mp4'

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <video width="100%" height="100%" controls>
              <source src={video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <div className="right row">
            <Title subtitle="ESTA É A NOSSA ESSÊNCIA:" title="TECNOLOGIA PARA IMPULSIONAR VIDAS." />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB" key={val.title}>
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
  );
};

export default AboutCard;
