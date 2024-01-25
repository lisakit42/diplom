// Header.jsx

import React from 'react';
import './Header.css'; // Импортируем стили
import logo from './logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="line">
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="2" viewBox="0 0 1920 2" fill="none">
        <path d="M0 1H1920" stroke="#4D331F" stroke-width="0.5"/>
        </svg>
      </div>
      <div className="logo">
        <img  src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;