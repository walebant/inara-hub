import React from 'react';
import Layout from '../components/Layout';
import Hero1 from '../components/Home/Hero1.js';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <Layout>
        <Hero1 />
      </Layout>
    </div>
  );
}

export default LandingPage;
