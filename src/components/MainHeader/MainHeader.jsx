import React from 'react';
import './MainHeader.scss';
import logo from '../upload/logo.svg';
import poisk from '../upload/poisk.png';

const MainHeader = () => {
  return (
    <div className='mainheader'>
      <div className='elementsrow'>
        <div className='LogoAndSlogan'>
          <div className='logo'>
            <img  src={logo} alt="Logo" />
          </div>
          <div className='vertline'>
          </div>
          <p className='slogan'>Гармония нот<br />
          и твоего таланта!</p>
        </div>
          <div className='poiskLink'>
            <img src={poisk} alt="" className='poisk' />
            <a href="/" className='link'><p>Поиск</p></a>
          </div>
          <a href="/" className='link'><p>Каталог</p></a>
        <a href="/" className='link'><p>Новости</p></a>
        <a href="/" className='link'><p><u><b>PREMIUM</b></u></p></a>
      </div>
    </div>
  );
};

export default MainHeader;