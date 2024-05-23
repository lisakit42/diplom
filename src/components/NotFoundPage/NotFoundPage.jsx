import "./NotFoundPage.scss";
import Pic404 from "../upload/404.png";
import logo from "../upload/logo.svg";

const NotFoundPage = () => {
    return (
        <div className="MainDivv">
            <div className="Num">
                <img src={Pic404} alt="" className="Pic404" />
            </div>
            <div className="LogoButton">
                <p>Ничего не нашлось!</p>
                <a href="/">
                    <button>На главную</button>
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
