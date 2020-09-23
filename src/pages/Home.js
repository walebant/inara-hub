import React from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home.js';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default LandingPage;
