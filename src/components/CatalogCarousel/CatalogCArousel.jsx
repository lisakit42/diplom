import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MocartMalenkayaNochnayaSerenadaPic from "../upload/catalogPics/mocart-malenkaya-nochnaya-serenada.jpg";
import BethovenLunnayaSonataPic from "../upload/catalogPics/MainPic1.jpg";
import TchaikovskyVremenaGodaPic from "../upload/catalogPics/tchaikovsky-vremena-goda.jpg";
import RachmaninovConcertoPic from "../upload/catalogPics/rachmaninov-concerto.jpg";
import BeethovenKElizePic from "../upload/catalogPics/beethoven-k-elize.jpg";
import TchaikovskyLebedinoeOzeroPic from "../upload/catalogPics/tchaikovsky-lebedinoe-ozero.jpg";
import BrahmsHungarianDancePic from "../upload/catalogPics/brahms-hungarian-dance.jpg";
import MozartConcertoPic from "../upload/catalogPics/mozart-concerto.jpg";
import GaspariniAdoramusPic from "../upload/catalogPics/gasparini-adoramus.jpg";
import BoccheriniSonataPic from "../upload/catalogPics/boccherini-sonata.jpg";
import "../CatalogCarousel/CatalogCarousel.scss";

function CatalogCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    const slides = [
        [
            {
                name: "Бетховен Людвиг ван",
                song: "Лунная Соната",
                img: BethovenLunnayaSonataPic,
                link: "/catalog/BethovenLunnayaSonata",
            },
            {
                name: "Моцарт Вольфганг Амадей",
                song: "Маленькая ночная серенада",
                img: MocartMalenkayaNochnayaSerenadaPic,
                link: "/catalog/MozartMalenkayaNochnayaSerenada",
            },
            {
                name: "Пётр Ильич Чайковский",
                song: "Времена года",
                img: TchaikovskyVremenaGodaPic,
                link: "/catalog/TchaikovskyVremenaGoda",
            },
            {
                name: "Сергей Рахманинов",
                song: "Фортепианный концерт №2 (до минор)",
                img: RachmaninovConcertoPic,
                link: "/catalog/RachmaninovConcerto",
            },
            {
                name: "Людвиг Ван Бетховен",
                song: "К Элизе",
                img: BeethovenKElizePic,
                link: "/catalog/BeethovenKElize",
            },
        ],
        [
            {
                name: "Пётр Ильич Чайковский",
                song: "Лебединое озеро",
                img: TchaikovskyLebedinoeOzeroPic,
                link: "/catalog/TchaikovskyLebedinoeOzero",
            },
            {
                name: "Иоганнес Брамс",
                song: "Венгерский танец № 5 (фа–диез минор)",
                img: BrahmsHungarianDancePic,
                link: "/catalog/BrahmsHungarianDance",
            },
            {
                name: "Моцарт Вольфганг Амадей",
                song: "Фортепианный концерт №. 21 до мажор, К. 467",
                img: MozartConcertoPic,
                link: "/catalog/MozartConcerto",
            },
            {
                name: "Франческо Гаспарини",
                song: "Адорамус те",
                img: GaspariniAdoramusPic,
                link: "/catalog/GaspariniAdoramus",
            },
            {
                name: "Луиджи Боккерини",
                song: "Соната для виолончели соль мажор, G.5",
                img: BoccheriniSonataPic,
                link: "/catalog/BoccheriniSonata",
            },
        ],
    ];

    return (
        <section className="carousel">
            <Slider {...settings}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="carousel__slide">
                        <div className="content-slide1">
                            {slide.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className={`card-content-${itemIndex + 1}`}
                                >
                                    <div className="image-container">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="card-img"
                                        />
                                    </div>
                                    <p className="card-text">
                                        <a
                                            href={item.link}
                                            className="card-text__url"
                                        >
                                            <b>{item.name}</b> -<br />
                                            {item.song}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="card-catalog">
                            <a href="/catalog" className="card-catalog-url">
                                Перейти в каталог
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default CatalogCarousel;
