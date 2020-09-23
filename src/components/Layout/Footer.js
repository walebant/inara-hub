import React from 'react';
import logo from '../../assets/images/iproduce-logo.png';
import { BsEnvelope } from 'react-icons/bs';
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramLine,
} from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='Footer'>
      <hr />
      <div className='container'>
        <div className='logo-container'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>

        <nav>
          <ul className='nav-link'>
            <li>
              <a href='#!'>About</a>
            </li>
            <li>
              <a href='#!'>News</a>
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
        </nav>

        <nav>
          <ul className='nav-link'>
            <li>
              <a href='#!'>Terms of use</a>
            </li>
            <li>
              <a href='#!'>Cookie policy</a>
            </li>
            <li>
              <a href='#!'>Privacy policy</a>
            </li>
            <li>
              <a href='#!'>Weather</a>
            </li>
          </ul>
        </nav>

        <div className='subscribe'>
          <p className='title'>Subscribe to our newsletter</p>
          <p className='info'>
            Sign up to our monthly newsletter to stay up tp date with iProduce
          </p>

          <form>
            <div className='form-group'>
              <BsEnvelope />
              <input type='email' placeholder='Enter your email' />
            </div>
          </form>
        </div>
      </div>
      <div className='bottom'>
        <div className='socials'>
          <a href='#!'>
            <RiFacebookFill />
          </a>
          <a href='#!'>
            <RiTwitterFill />
          </a>
          <a href='#!'>
            <RiLinkedinFill />
          </a>
          <a href='#!'>
            <RiInstagramLine />
          </a>
        </div>
        <p className='copyright'>
          © {new Date().getFullYear()} iProduce. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
