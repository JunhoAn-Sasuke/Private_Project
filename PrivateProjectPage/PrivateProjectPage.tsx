import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './PrivatePage.scss';

const PrivatePage: React.FC = () => {
  return (
    <div className="netflix-page">
      <Header />
      <section className="hero">
        <div className="content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <button className="cta">Get Started</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivatePage;