import React from 'react';
import './Body.scss';
import PremiumPic from '../upload/mainpagepremium.png';

const Body = () => {
  return (
    <div className="Body">
        <div className="box">
          <h3>Наши новинки</h3>
          <div className="new-content"></div>

          <h3>Рассылка</h3>
          <div className="mailing"></div>

          <h3>Популярное</h3>
          <div className="popular"></div>

          <h3>Premium подписка</h3>
          <div className="premium">
            <img src={PremiumPic} alt="" className='PremiumPic'/>

            <p className='PremiumTextBlock'>Безлимитный доступ ко всем музыкальным произведениям<br />всего за 200 рублей в месяц!</p>
            <p className='PremiumTextBlockButton'><b>Оформить</b></p>
          </div>
        </div>
    </div>
  );
};

export default Body;