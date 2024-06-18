import React, { useState } from "react";
import "./BethovenLunnayaSonata.scss";
import MainPic1 from "../../../upload/catalogPics/MainPic1.jpg";
import Like from "../../../upload/fav.svg";

const BethovenLunnayaSonata = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        setIsFavorite(!isFavorite);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="MainPartCatalog">
            <div className="MainPic">
                <img src={MainPic1} alt="Main" />
            </div>
            <div className="MainDecription">
                <h2>
                    <b>Людвиг Ван Бетховен</b> - Лунная соната
                </h2>
                <br />
                <div className="specifications">
                    <div>
                        <p className="svoystvo">Сложность</p>
                        <p className="svoystvo">Инструмент</p>
                    </div>
                    <div className="line"></div>
                    <div>
                        <p>Легко</p>
                        <p>Гитара</p>
                    </div>
                </div>
                <div className="FavItemContainer">
                    <button className="FavItem" onClick={handleAddToFavorites}>
                        <img src={Like} className="FavItemImage" alt="Like" />
                        {isFavorite
                            ? "Убрать из избранного"
                            : "Добавить в избранное"}
                    </button>
                </div>
            </div>
            <div className="MainButtons">
                <p>Бесплатно</p>
                <a href="#">
                    <button>Скачать .pdf</button>
                </a>
                <a href="#">
                    <button>Скачать .jpg</button>
                </a>
                <a href="#">
                    <button>Скачать .midi</button>
                </a>
            </div>
            {showNotification && (
                <div className="notification">
                    {isFavorite
                        ? "Добавлено в избранное"
                        : "Удалено из избранного"}
                </div>
            )}
        </div>
    );
};

export default BethovenLunnayaSonata;
