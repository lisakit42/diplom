import React, { useState } from "react";
import "./Favourite.scss";
import MocartMalenkayaNochnayaSerenadaPic from "../upload/catalogPics/mocart-malenkaya-nochnaya-serenada.jpg";
import BethovenLunnayaSonataPic from "../upload/catalogPics/MainPic1.jpg";
import TchaikovskyVremenaGodaPic from "../upload/catalogPics/tchaikovsky-vremena-goda.jpg";
import RachmaninovConcertoPic from "../upload/catalogPics/rachmaninov-concerto.jpg";
import BeethovenKElizePic from "../upload/catalogPics/beethoven-k-elize.jpg";
import TchaikovskyLebedinoeOzeroPic from "../upload/catalogPics/tchaikovsky-lebedinoe-ozero.jpg";
import BoccheriniSonataPic from "../upload/catalogPics/boccherini-sonata.jpg";
import Like from "../upload/fav.svg";
import FullLike from "../upload/redheart.svg";

const musicParts = [
    {
        id: 1,
        image: MocartMalenkayaNochnayaSerenadaPic,
        composer: "Моцарт Вольфганг Амадей",
        title: "Маленькая ночная серенада",
    },
    {
        id: 2,
        image: TchaikovskyVremenaGodaPic,
        composer: "Пётр Ильич Чайковский",
        title: "Времена года",
    },
    {
        id: 3,
        image: RachmaninovConcertoPic,
        composer: "Сергей Рахманинов",
        title: "Фортепианный концерт №2 (до минор)",
    },
    {
        id: 4,
        image: BeethovenKElizePic,
        composer: "Людвиг Ван Бетховен",
        title: "К Элизе",
    },
    {
        id: 5,
        image: TchaikovskyLebedinoeOzeroPic,
        composer: "Пётр Ильич Чайковский",
        title: "Лебединое озеро",
    },
    {
        id: 6,
        image: BethovenLunnayaSonataPic,
        composer: "Бетховен Людвиг ван",
        title: "Лунная Соната",
    },
    {
        id: 7,
        image: BoccheriniSonataPic,
        composer: "Луиджи Боккерини",
        title: "Соната для виолончели соль мажор, G.5",
    },
];

const Favourite = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handleAddToFavorites = (musicPartId) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(musicPartId)) {
            newFavorites.delete(musicPartId);
            setNotificationMessage("Удалено из избранного");
        } else {
            newFavorites.add(musicPartId);
            setNotificationMessage("Добавлено в избранное");
        }
        setFavorites(newFavorites);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className="Favourite">
            <h2 className="Title">Избранное</h2>
            <div className="Cards">
                {musicParts.map((part, index) => (
                    <div
                        className={`Card ${index === 5 ? "sixth-card" : ""}`}
                        key={part.id}
                    >
                        <div className="CardTemplate">
                            <img src={part.image} alt="" className="ItemPic" />
                            <p className="TextItem">
                                <b>{part.composer}</b> - <br /> {part.title}
                            </p>
                            <button
                                className={`FavItem ${
                                    favorites.has(part.id) ? "favorited" : ""
                                }`}
                                onClick={() => handleAddToFavorites(part.id)}
                            >
                                {favorites.has(part.id) ? (
                                    <img
                                        src={FullLike}
                                        className="FavItemImage"
                                        alt="Like"
                                    />
                                ) : (
                                    <img
                                        src={Like}
                                        className="FavItemImage"
                                        alt="Like"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {showNotification && (
                <div className="notification">{notificationMessage}</div>
            )}
        </div>
    );
};

export default Favourite;
