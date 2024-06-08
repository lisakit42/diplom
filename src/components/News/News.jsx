import React from 'react';
import { Helmet } from 'react-helmet';
import "./News.scss";
import PicBirthday from "../upload/news/birthday.jpg";
import PicNew from "../upload/news/new.jpg";
import PicRassilka from "../upload/news/rassilka.jpg";
import PicShare from "../upload/news/share.jpg";

const News = () => {
  return (
    <div className="NewsList">
      <Helmet>
        <title>Новости</title>
      </Helmet>
      <div className="NewsElement">
        <div class="image">
          <img src={PicBirthday} alt="PicBirthday" />
        </div>
        <div class="content">
          <h2 className="H2News">Play in Tune: два года в ритме музыки!</h2>
          <p className="TextAnons">
            Сегодня нашему сайту Play in Tune исполняется два года, и мы
            приглашаем вас присоединиться к нашей праздничной радости! За это
            время мы сделали огромные успехи благодаря вашей поддержке. В честь
            этого события мы подготовили для вас специальные скидки на самые
            популярные музыкальные партитуры. Не упустите шанс обновить свой
            музыкальный репертуар по выгодным ценам! Празднуйте с нами и
            наслаждайтесь музыкой с Play in Tune!
          </p>
        </div>
      </div>
      <div className="NewsElement">
        <div class="image">
          <img src={PicNew} alt="PicBirthday" />
          <a href="/catalog/" class="rectangle-button">
            в каталог
          </a>
        </div>
        <div class="content">
          <h2 className="H2News">
            Новые поступления классических произведений на Play in Tune
          </h2>
          <p className="TextAnons">
            Play in Tune рады представить вам наши свежие поступления -
            классические произведения, которые украшают наше музыкальное
            наследие. От изысканных симфоний до эмоциональных сонат, наши новые
            партитуры охватывают широкий спектр великих композиций, которые
            вдохновляли музыкантов на протяжении веков.
          </p>
          <p className="TextAnons">
            Не упустите возможность обогатить свой репертуар и раскрыть новые
            горизонты музыкального творчества с помощью наших новых поступлений.
            Посетите Play in Tune уже сегодня и окунитесь в мир классической
            музыки!
          </p>
        </div>
      </div>
      <div className="NewsElement">
        <div class="image">
          <img src={PicRassilka} alt="PicBirthday" />
        </div>
        <div class="content">
          <h2 className="H2News">
            Обновлённая email рассылка от Play in Tune!
          </h2>
          <p className="TextAnons">
            Мы рады сообщить, что мы обновили нашу email рассылку для вас!
            Теперь получать информацию о новинках, акциях и скидках стало еще
            проще и удобнее. Подпишитесь сегодня и оставайтесь в курсе всех
            музыкальных событий с Play in Tune!
          </p>
        </div>
      </div>
      <div className="NewsElement">
        <div class="image">
          <img src={PicShare} alt="PicBirthday" />
        </div>
        <div class="content">
          <h2 className="H2News">
            Приглашайте друзей и делитесь музыкальной страстью с Play in Tune!
          </h2>
          <p className="TextAnons">
            Сделайте музыку доступной для всех! Приглашайте своих друзей на Play
            in Tune и делись своим музыкальным опытом. Будьте частью нашего
            сообщества и вдохновляйте других музыкальными произведениями,
            которые вы любите. Приглашайте, делитесь, и создавайте музыку вместе
            с Play in Tune!
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
