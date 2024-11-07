import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;