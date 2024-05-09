import React, { useState } from "react";
import "./Body.scss";
import PremiumPic from "../upload/mainpagepremium.png";
import { Carousel } from "./Carousel/Carousel.jsx";
import InputName from "./InputName/InputName.jsx";
import InputEmail from "./InputEmail//InputEmail.jsx";
import CardPic from "../upload/notes1.jpg";

const Body = () => {
  return (
    <div className="Body">
      <div className="box">
        <h3>Наши новинки</h3>
        <div className="new-content">
          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="content-slide1">
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                  </div>
                  <a href="#carousel__slide4" className="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <div className="content-slide1">
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                </div>
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide3" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide3"
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper"></div>
                <div className="content-slide1">
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                  <div className="card-content-1">
                    <img src={CardPic} alt="" className="CardPic" />
                    <p className="card-text">
                      <b>Бетховен Людвиг ван</b> - К Элизе
                    </p>
                  </div>
                </div>
                <a href="#carousel__slide2" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide4" className="carousel__next">
                  Go to next slide
                </a>
              </li>
              <li
                id="carousel__slide4"
                tabindex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <div className="content-slide1">
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                    <div className="card-content-1">
                      <img src={CardPic} alt="" className="CardPic" />
                      <p className="card-text">
                        <b>Бетховен Людвиг ван</b> - К Элизе
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#carousel__slide3" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  Go to first slide
                </a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide1"
                    className="carousel__navigation-button"
                  >
                    Go to slide 1
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide2"
                    className="carousel__navigation-button"
                  >
                    Go to slide 2
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide3"
                    className="carousel__navigation-button"
                  >
                    Go to slide 3
                  </a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide4"
                    className="carousel__navigation-button"
                  >
                    Go to slide 4
                  </a>
                </li>
              </ol>
            </aside>
          </section>
        </div>

        <h3>Рассылка</h3>
        <h4 className="rassilka-text">
          Будь в курсе наших новинок и акций: подпишись на нашу рассылку!
        </h4>
        <div className="mailing">
          <InputName />
          <InputEmail />
          <div className="button-fos">Отправить</div>
        </div>

        {/* <h3>Популярное</h3>
          <div className="popular"></div> */}

        <h3>Premium подписка</h3>
        <div className="premium">
          <img src={PremiumPic} alt="" className="PremiumPic" />
          <div className="BackPremiumTextBlock">
            <p className="PremiumTextBlock">
              Безлимитный доступ ко всем музыкальным произведениям
              <br />
              всего за 200 рублей в месяц!
            </p>
          </div>
          <div className="BackPremiumTextBlockButton">
            <p className="PremiumTextBlockButton">
              <a className="linkk" href="/">
                <b>Оформить</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
