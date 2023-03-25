import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          onClick={() => navigate('/')}
          src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
          alt=''
          className='nav__logo'
        />
        <img
          onClick={() => navigate('/profile')}
          src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
          alt=''
          className='nav__avatar'
        />
      </div>
    </div>
  );
};

export default Nav;
