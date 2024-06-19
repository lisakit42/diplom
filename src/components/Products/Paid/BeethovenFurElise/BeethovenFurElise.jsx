import React, { useState } from "react";
import "./BeethovenFurElise.scss";
import MainPic from "../../../upload/catalogPics/beethoven-k-elize.jpg";
import Like from "../../../upload/fav.svg";
import CatalogCarousel from "../../../CatalogCarousel/CatalogCArousel";

const BeethovenFurElise = () => {
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
        <>
            <div className="MainPartCatalog">
                <div className="MainPic">
                    <img src={MainPic} alt="Main" />
                </div>
                <div className="MainDecription">
                    <h2>
                        <b>Людвиг Ван Бетховен</b> - К Элизе
                    </h2>
                    <br />
                    <div className="specifications">
                        <div>
                            <p className="svoystvo">Сложность</p>
                            <p className="svoystvo">Инструмент</p>
                        </div>
                        <div className="line"></div>
                        <div>
                            <p>Средняя</p>
                            <p>Фортепиано</p>
                        </div>
                    </div>
                    <div className="FavItemContainer">
                        <button
                            className="FavItem"
                            onClick={handleAddToFavorites}
                        >
                            <img
                                src={Like}
                                className="FavItemImage"
                                alt="Like"
                            />
                            {isFavorite
                                ? "Убрать из избранного"
                                : "Добавить в избранное"}
                        </button>
                    </div>
                </div>
                <div className="MainButtons">
                    <p>
                        <b>Стоимость:</b>
                        <br />
                        <br />
                        Premium или 99 руб.
                    </p>
                    <a href="#">
                        <button>Оплатить</button>
                    </a>
                    <a href="/premium/" className="premium-link">
                        <button>Приобрести PREMIUM</button>{" "}
                    </a>
                </div>
            </div>
            {showNotification && (
                <div className="notification">
                    {isFavorite
                        ? "Добавлено в избранное"
                        : "Удалено из избранного"}
                </div>
            )}
            <h3 className="H3Catalog">Смотрите также</h3>
            <CatalogCarousel />
        </>
    );
};

export default BeethovenFurElise;
