import React from 'react';
import './PrivateProjectPage.module.sass';

const PrivatePage: React.FC = () => {
  return (
    <div className="netflix-page">
      <header className="header">
        <div className="logo">MyFlix</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
        </nav>
      </header>

      <section className="hero">
        <div className="content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <button className="cta">Get Started</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MyFlix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivatePage;
