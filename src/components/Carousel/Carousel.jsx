import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPic from "../upload/notes1.jpg";
import "../Carousel/Carousel.scss";

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

    return (
        <section className="carousel">
            <Slider {...settings}>
                {[1, 2, 3, 4].map((slide) => (
                    <div key={slide} className="carousel__slide">
                        <div className="content-slide1">
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="card-content-1">
                                    <img
                                        src={CardPic}
                                        alt=""
                                        className="CardPic"
                                    />
                                    <p className="card-text">
                                        <b>Бетховен Людвиг ван</b> - К Элизе
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
