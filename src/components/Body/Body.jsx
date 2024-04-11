import React from 'react';
import './Body.scss';
import PremiumPic from '../upload/mainpagepremium.png';
import { Carousel } from './Carousel/Carousel.jsx';

const Body = () => {
  return (
    <div className="Body">
        <div className="box">
          <h3>Наши новинки</h3>
          <div className="new-content">
          <Carousel>
            <div className="item item-1">Item1</div>
            <div className="item item-2">Item2</div>
            <div className="item item-3">Item3</div>
            <div className="item item-4">Item4</div>
            <div className="item item-5">Item5</div>
            <div className="item item-6">Item6</div>
            <div className="item item-7">Item7</div>
            <div className="item item-8">Item8</div>
            <div className="item item-9">Item9</div>
            <div className="item item-10">Item10</div>
          </Carousel>
          </div>

          <h3>Рассылка</h3>
          <div className="mailing"></div>

          <h3>Популярное</h3>
          <div className="popular"></div>

          <h3>Premium подписка</h3>
          <div className="premium">
            <img src={PremiumPic} alt="" className='PremiumPic'/>
            <div className='BackPremiumTextBlock'>
              <p className='PremiumTextBlock'>Безлимитный доступ ко всем музыкальным произведениям<br />всего за 200 рублей в месяц!</p>
            </div>
            <div className='BackPremiumTextBlockButton'>
              <p className='PremiumTextBlockButton'><a className='linkk' href='/'><b>Оформить</b></a></p>
            </div>          
          </div>
        </div>
    </div>
  );
};

export default Body;