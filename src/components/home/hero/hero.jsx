// import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hero.css';
// import Title from '../../common/title/Title';

const Hero = () => {
    // const [showText, setShowText] = useState(true);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false, // Evita pausar o autoplay quando o mouse está sobre o carrossel
        beforeChange: (current, next) => {
            // setShowText(next === 0);
          },
      };
      

  return (
    <Slider {...sliderSettings}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className={`hero-slide hero-slide-${index}`}>
          <div className="container">
            <div className="row">
            {/* {showText && (
                  <div>
                    <Title
                      subtitle="positivo tecnologia"
                      title="Uma das maiores maiores empresas de tecnologia do planeta é brasileira"
                    />
              <p>
                Positivo é a Big Tech do Brasil. A gente leva inovação através de notebooks, smartphones,
                servidores para casas e escritórios, a nossa tecnologia está somando na vida de todos os brasileiros.
              </p>
              <div className="button">
                <button className="primary-btn">
                  SAIBA MAIS <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button>
                  VEJA MAIS SOBRE NOSSOS PRODUTOS <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
                  </div>
                )} */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
