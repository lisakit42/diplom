import "./Body.scss";
import PremiumPic from "../upload/mainpagepremium.png";
import InputName from "./InputName/InputName.jsx";
import InputEmail from "./InputEmail/InputEmail.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import { Helmet } from "react-helmet";

const Body = () => {
    return (
        <div className="Body">
            <Helmet>
                <title>Главная страница</title>
            </Helmet>
            <div className="box">
                <h3>Наши новинки</h3>
                <div className="new-content">
                    <Carousel />
                </div>

                <h3>Рассылка</h3>
                <h4 className="rassilka-text">
                    Будь в курсе наших новинок и акций: подпишись на нашу
                    рассылку!
                </h4>
                <div className="mailing">
                    <InputName />
                    <InputEmail />
                    <div className="button-fos">Отправить</div>
                </div>
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
                            <a className="linkk" href="/premium/">
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
