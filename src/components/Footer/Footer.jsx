import React from "react";
import "./Footer.scss";
import logo from "../upload/logo.svg";
import poisk from "../upload/poisk.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="FooterPosition">
                <div className="LogoAndSloganFooter">
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="vertline"></div>
                    <p className="slogan">
                        Гармония нот
                        <br />и твоего таланта!
                    </p>
                </div>
                <div className="SpisokFooter">
                    <div className="SpisokKatalog">
                        <a href="/" className="link">
                            <p>
                                <strong>Каталог</strong>
                            </p>
                        </a>
                        <a href="/" className="link2">
                            <p>Популярные</p>
                        </a>
                        <a href="/" className="link2">
                            <p>Исполнители</p>
                        </a>
                        <a href="/" className="link2">
                            <p>Инструменты</p>
                        </a>
                        <a href="/" className="link2">
                            <p>Бесплатные</p>
                        </a>
                    </div>
                </div>
                <div className="SpisokFooter">
                    <a href="/news/" className="link">
                        <p>
                            <strong>Новости</strong>
                        </p>
                    </a>
                </div>
                <div className="SpisokFooter">
                    <a href="/authorization/" className="link">
                        <p>
                            <strong>Избранное</strong>
                        </p>
                    </a>
                </div>
                <div className="SpisokFooter">
                    <a href="/authorization/" className="link">
                        <p>
                            <strong>Личный кабинет</strong>
                        </p>
                    </a>
                </div>
                <div className="PremiumButton">
                    <a href="/premium/" className="linkPremuim">
                        <p className="PremuimText">
                            <strong>Оформить Premium</strong>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
