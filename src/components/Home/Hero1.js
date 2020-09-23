import React from 'react';
import hero from '../../assets/images/hero.png';
import iCreateLogo from '../../assets/images/iCreate-logo.png';
import nepcLogo from '../../assets/images/nepc-logo.png';
import awibLogo from '../../assets/images/awib-consulting.png';
import careedLogo from '../../assets/images/group-4.png';
import { ReactComponent as HandshakeIcon } from '../../assets/icons/handshake-icon.svg';
import { ReactComponent as BagIcon } from '../../assets/icons/bag-icon.svg';
import { ReactComponent as GuideIcon } from '../../assets/icons/guide-icon.svg';
import { ReactComponent as FeedbackIcon } from '../../assets/icons/feedback-icon.svg';

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

            <li>
              <img alt='logo' src={nepcLogo} />
            </li>

            <li>
              <img alt='logo' src={iCreateLogo} />
            </li>

            <li>
              <img alt='logo' src={awibLogo} />
            </li>
          </ul>
        </section>

        <section>
          <div className='left'>
            <h2>
              Integrating African Agripreneurs to the World Agro-ecosystem
            </h2>
            <p>
              iProduce Africa Agri-business hub is an initiative of Inara
              Foundation, a non-profit organization established to address
              development challenges in Nigeria with a focus on the following
              thematic areas: youth empowerment; economic development; women
              empowerment; and education..
            </p>
          </div>

          <div className='right'>
            <h2>
              Integrating African Agripreneurs to the World Agro-ecosystem
            </h2>
            <p>
              iProduce Africa Agri-business hub is an initiative of Inara
              Foundation, a non-profit organization established to address
              development challenges in Nigeria with a focus on the following
              thematic areas: youth empowerment; economic development; women
              empowerment; and education..
            </p>
          </div>
        </section>
      </div>

      <div className='Hero Hero3'>
        <h5>WHY REGISTER</h5>
        <h2 className='title'>
          We equip you with all that you <br />
          need to grow your agro-business
        </h2>

        <section className='grid'>
          <div className='grid-item'>
            <div className='icon-box'>
              <BagIcon />
            </div>
            <div className='text'>
              <h2>Business Advisory Services</h2>
              <p>
                Access our business advisory and coaching services for
                agripreneurs
              </p>
            </div>
          </div>
          <div className='grid-item essential-guide'>
            <div className='icon-box'>
              <GuideIcon />
            </div>
            <div className='text'>
              <h2>Essential Guides</h2>
              <p>Learn about prospective export markets</p>
            </div>
          </div>
          <div className='grid-item'>
            <div className='icon-box'>
              <FeedbackIcon />
            </div>
            <div className='text'>
              <h2>Easy feedback sharing</h2>
              <p>
                Attend our events tailored to build the capacity of our
                agripreneurs
              </p>
            </div>
          </div>
          <div className='grid-item'>
            <div className='icon-box'>
              <HandshakeIcon />
            </div>
            <div className='text'>
              <h2>Business Deal room</h2>
              <p>
                Get matched and connect with potential agribusiness partners
                around the globe
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='Hero Hero4'>
        <section>
          <h2>Check Our Blog</h2>
          <button>Show more</button>
        </section>

        <section className='grid'>
          <div className='grid-item'>
            <div className='img-container'>
              <HandshakeIcon />
            </div>

            <div className='description'>
              <h2>How Ag-Tech Ripened Into a Growing Market</h2>
              <p>
                Some people maybe still confusing to arrange budgeting for their
                bu…
              </p>

              <a href='#!'>Read more</a>
            </div>
          </div>
          <div className='grid-item'>
            <div className='img-container'>
              <HandshakeIcon />
            </div>

            <div className='description'>
              <h2>How Ag-Tech Ripened Into a Growing Market</h2>
              <p>
                Some people maybe still confusing to arrange budgeting for their
                bu…
              </p>

              <a href='#!'>Read more</a>
            </div>
          </div>
          <div className='grid-item'>
            <div className='img-container'>
              <HandshakeIcon />
            </div>

            <div className='description'>
              <h2>How Ag-Tech Ripened Into a Growing Market</h2>
              <p>
                Some people maybe still confusing to arrange budgeting for their
                bu…
              </p>

              <a href='#!'>Read more</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
