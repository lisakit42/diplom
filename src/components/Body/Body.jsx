import "./Body.scss";
import PremiumPic from "../upload/mainpagepremium.png";
import InputName from "./InputName/InputName.jsx";
import InputEmail from "./InputEmail/InputEmail.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import { Helmet } from "react-helmet";
import React, { useState } from "react";

const Body = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [agreement, setAgreement] = useState(false);

    const handleSubscribeClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!agreement) {
            alert(
                "Вы должны принять политику конфиденциальности и согласие на обработку данных"
            );
            return;
        }
        console.log("Subscribed!");
        setModalOpen(false);
    };

    return (
        <div className="Body">
            <Helmet>
                <title>Play in Tune</title>
            </Helmet>
            <div className="box">
                <h3>Наши новинки</h3>
                <div className="new-content">
                    <Carousel />
                </div>

                <h3>Рассылка</h3>
                <div className="mailing">
                    <h4 className="rassilka-text">
                        Будь в курсе наших новинок и акций: подпишись на нашу
                        рассылку!
                    </h4>
                    <br />
                    <button
                        className="button-fos"
                        onClick={handleSubscribeClick}
                    >
                        Подписаться
                    </button>
                </div>

                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <form
                                onSubmit={handleSubmit}
                                className="SubscriptionForm"
                            >
                                <InputName />
                                <InputEmail />
                                <div className="form-group checkbox-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={agreement}
                                            onChange={(e) =>
                                                setAgreement(e.target.checked)
                                            }
                                            required
                                        />
                                        Я согласен с{" "}
                                        <a
                                            href="/privacy"
                                            className="highlight-link"
                                        >
                                            политикой конфиденциальности и
                                            согласием на обработку персональных
                                            данных
                                        </a>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="RegisterButton"
                                >
                                    Подписаться
                                </button>
                            </form>
                        </div>
                    </div>
                )}

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
