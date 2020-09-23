import React from 'react';
import logo from '../../assets/images/iproduce-logo.png';

const Header = () => {
  return (
    <header className='Header'>
      <div className='logo-container'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>

      <ul className='nav-link'>
        <li>
          <a href='#!'>About</a>
        </li>
        <li>
          <a href='#!'>Blog</a>
        </li>
        <li>
          <a href='#!'>Events</a>
        </li>
        <li>
          <a href='#!'>International</a>
        </li>
        <li>
          <a href='#!'>Contact</a>
        </li>
      </ul>

      <ul className='nav-button'>
        <li>
          <button className='login'>LOG IN</button>
        </li>
        <li>
          <button className='join-us'>JOIN US</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
