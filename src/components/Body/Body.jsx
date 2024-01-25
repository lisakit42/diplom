// Body.jsx

import React from 'react';
import './Body.css'; // Импортируем стили

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
          <div className="premium"></div>
        </div>
    </div>
  );
};

export default Body;