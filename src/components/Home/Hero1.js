import React from 'react';
import hero from '../../assets/images/hero.png';
import iCreateLogo from '../assets/images/iCreate-logo.png';
import nepcLogo from '../assets/images/nepc-logo.png';
import awibLogo from '../assets/images/awib-logo.svg';
import careedLogo from '../assets/images/careed-logo.png';

const Hero = () => {
  return (
    <>
      <div className='Hero Hero1'>
        <div className='left'>
          <h1>Unlocking Agribusiness Opportunities</h1>
          <p>
            We connect you with helpful resources, services and opportunities to
            start or grow your agribusiness.
          </p>

          <button>JOIN US</button>
        </div>
        <div className='right'>
          <img src={hero} alt='' />
        </div>
      </div>

      <div className='Hero Hero2'>
        <h1>Our Partners & Sponsors</h1>
        <section>
          <ul>
            <li>
              <img alt='logo' src={careedLogo} />
            </li>
          </ul>
          <ul>
            <li>
              <img alt='logo' src={nepcLogo} />
            </li>
          </ul>
          <ul>
            <li>
              <img alt='logo' src={iCreateLogo} />
            </li>
          </ul>
          <ul>
            <li>
              <img alt='logo' src={awibLogo} />
            </li>
          </ul>
        </section>

        <section>
          <div className='left'>
            <img src={hero} alt='' />
          </div>
          <div className='right'>
            <h1>Unlocking Agribusiness Opportunities</h1>
            <p>
              We connect you with helpful resources, services and opportunities
              to start or grow your agribusiness.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
