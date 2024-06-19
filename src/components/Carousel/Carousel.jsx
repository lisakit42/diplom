import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/Carousel.scss";

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

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const slides = [
        [
            {
                name: "Бетховен Людвиг ван",
                song: "Лунная Соната",
                img: BethovenLunnayaSonataPic,
                link: "/catalog/bethovenlunnayasonata/",
            },
            {
                name: "Моцарт Вольфганг Амадей",
                song: "Маленькая ночная серенада",
                img: MocartMalenkayaNochnayaSerenadaPic,
                link: "/catalog/mocartmalenkayanochnayaserenada/",
            },
            {
                name: "Пётр Ильич Чайковский",
                song: "Времена года",
                img: TchaikovskyVremenaGodaPic,
                link: "/catalog/chaykovskyvremenagoda/",
            },
            {
                name: "Сергей Рахманинов",
                song: "Фортепианный концерт №2 (до минор)",
                img: RachmaninovConcertoPic,
                link: "/catalog/rachmaninovpianoconcerto2/",
            },
            {
                name: "Людвиг Ван Бетховен",
                song: "К Элизе",
                img: BeethovenKElizePic,
                link: "/catalog/beethovenfurelise/",
            },
        ],
        [
            {
                name: "Пётр Ильич Чайковский",
                song: "Лебединое озеро",
                img: TchaikovskyLebedinoeOzeroPic,
                link: "/catalog/chaykovskyswanlake/",
            },
            {
                name: "Иоганнес Брамс",
                song: "Венгерский танец № 5 (фа–диез минор)",
                img: BrahmsHungarianDancePic,
                link: "/catalog/brahmshungariandance5/",
            },
            {
                name: "Моцарт Вольфганг Амадей",
                song: "Фортепианный концерт №. 21 до мажор, К. 467",
                img: MozartConcertoPic,
                link: "/catalog/mozartpianoconcerto21/",
            },
            {
                name: "Франческо Гаспарини",
                song: "Адорамус те",
                img: GaspariniAdoramusPic,
                link: "/catalog/gaspariniadoramuste/",
            },
            {
                name: "Луиджи Боккерини",
                song: "Соната для виолончели соль мажор, G.5",
                img: BoccheriniSonataPic,
                link: "/catalog/boccherinisonatag5/",
            },
        ],
    ];

    return (
        <section className="carousel">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel__slide">
                        <div className="content-slide1">
                            {slide.map((item, i) => (
                                <div key={i} className="card-content-1">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="CardPic"
                                    />
                                    <p className="card-text">
                                        <a
                                            href={item.link}
                                            className="card-link"
                                        >
                                            <b>{item.name}</b> - <br />
                                            {item.song}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#4d331f",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#4d331f",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

export default Carousel;
