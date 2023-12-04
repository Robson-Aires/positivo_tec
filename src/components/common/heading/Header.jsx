import React, { useState } from 'react';
import Head from './Head';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/atitudes">Atitudes</Link></li>
            <li><Link to="/about">Quem Somos</Link></li>
            <li><Link to="/time">Time</Link></li>
            <li><Link to="/cultura">Vivência Cultural</Link></li>
            <li><Link to="/imprensa">Sala de Imprensa</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Atitudes</Link></li>
            <li><Link to="/about">Quem Somos</Link></li>
            <li><Link to="/team">Time</Link></li>
            <li><Link to="/pricing">Vivência Cultural</Link></li>
            <li><Link to="/journal">Sala de Imprensa</Link></li>
            <li><Link to="/contact">Contato</Link></li> */}
          <div className="start">
            <div className="button">POSITIVO</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)} >
                {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i> }
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
