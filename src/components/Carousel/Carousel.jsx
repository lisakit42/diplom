import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardPic from "../upload/notes1.jpg";
import "../Carousel/Carousel.scss";


// function Carousel () {
//     return (
//         <section className="carousel" aria-label="Gallery">
//                         <ol className="carousel__viewport">
//                             <li
//                                 id="carousel__slide1"
//                                 tabindex="0"
//                                 className="carousel__slide"
//                             >
//                                 <div className="carousel__snapper">
//                                     <div className="content-slide1">
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <a
//                                         href="#carousel__slide4"
//                                         className="carousel__prev"
//                                     >
//                                         Go to last slide
//                                     </a>
//                                     <a
//                                         href="#carousel__slide2"
//                                         className="carousel__next"
//                                     >
//                                         Go to next slide
//                                     </a>
//                                 </div>
//                             </li>
//                             <li
//                                 id="carousel__slide2"
//                                 tabindex="0"
//                                 className="carousel__slide"
//                             >
//                                 <div className="carousel__snapper"></div>
//                                 <div className="content-slide1">
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <a
//                                     href="#carousel__slide1"
//                                     className="carousel__prev"
//                                 >
//                                     Go to previous slide
//                                 </a>
//                                 <a
//                                     href="#carousel__slide3"
//                                     className="carousel__next"
//                                 >
//                                     Go to next slide
//                                 </a>
//                             </li>
//                             <li
//                                 id="carousel__slide3"
//                                 tabindex="0"
//                                 className="carousel__slide"
//                             >
//                                 <div className="carousel__snapper"></div>
//                                 <div className="content-slide1">
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                     <div className="card-content-1">
//                                         <img
//                                             src={CardPic}
//                                             alt=""
//                                             className="CardPic"
//                                         />
//                                         <p className="card-text">
//                                             <b>Бетховен Людвиг ван</b> - К Элизе
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <a
//                                     href="#carousel__slide2"
//                                     className="carousel__prev"
//                                 >
//                                     Go to previous slide
//                                 </a>
//                                 <a
//                                     href="#carousel__slide4"
//                                     className="carousel__next"
//                                 >
//                                     Go to next slide
//                                 </a>
//                             </li>
//                             <li
//                                 id="carousel__slide4"
//                                 tabindex="0"
//                                 className="carousel__slide"
//                             >
//                                 <div className="carousel__snapper">
//                                     <div className="content-slide1">
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                         <div className="card-content-1">
//                                             <img
//                                                 src={CardPic}
//                                                 alt=""
//                                                 className="CardPic"
//                                             />
//                                             <p className="card-text">
//                                                 <b>Бетховен Людвиг ван</b> - К
//                                                 Элизе
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <a
//                                     href="#carousel__slide3"
//                                     className="carousel__prev"
//                                 >
//                                     Go to previous slide
//                                 </a>
//                                 <a
//                                     href="#carousel__slide1"
//                                     className="carousel__next"
//                                 >
//                                     Go to first slide
//                                 </a>
//                             </li>
//                         </ol>
//                         <aside className="carousel__navigation">
//                             <ol className="carousel__navigation-list">
//                                 <li className="carousel__navigation-item">
//                                     <a
//                                         href="#carousel__slide1"
//                                         className="carousel__navigation-button"
//                                     >
//                                         Go to slide 1
//                                     </a>
//                                 </li>
//                                 <li className="carousel__navigation-item">
//                                     <a
//                                         href="#carousel__slide2"
//                                         className="carousel__navigation-button"
//                                     >
//                                         Go to slide 2
//                                     </a>
//                                 </li>
//                                 <li className="carousel__navigation-item">
//                                     <a
//                                         href="#carousel__slide3"
//                                         className="carousel__navigation-button"
//                                     >
//                                         Go to slide 3
//                                     </a>
//                                 </li>
//                                 <li className="carousel__navigation-item">
//                                     <a
//                                         href="#carousel__slide4"
//                                         className="carousel__navigation-button"
//                                     >
//                                         Go to slide 4
//                                     </a>
//                                 </li>
//                             </ol>
//                         </aside>
// </section>
//     )
// }

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
                                    <img src={CardPic} alt="" className="CardPic" />
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
            style={{ ...style, display: 'block', background: '#4d331f', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: '#4d331f', borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}


export default Carousel;