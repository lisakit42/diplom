import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPic from "../upload/notes1.jpg";
import "../CatalogCarousel/CatalogCarousel.scss"

function CatalogCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
            <section className="carousel">
                <Slider {...settings}>
                    {[1].map((slide) => (
                        <div key={slide} className="carousel__slide">
                            <div className="content-slide1">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="card-content-1">
                                        <img
                                            src={CardPic}
                                            alt=""
                                            className="CardPic"
                                        />
                                        <p className="card-text">
                                            <a href="/catalog/BethovenLunnayaSonata/" className="card-text__url"><b>Бетховен Людвиг ван</b> - К Элизе</a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                    <div className="card-catalog">
                        <a href="/catalog" className="card-catalog-url">Перейти в каталог</a>
                    </div>
                        </div>
                    ))}
                </Slider>
            </section>
        );
    
}


export default CatalogCarousel;
