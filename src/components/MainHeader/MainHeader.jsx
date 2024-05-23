import React from "react";
import "./MainHeader.scss";
import logo from "../upload/logo.svg";
import poisk from "../upload/poisk.png";

const MainHeader = () => {
    return (
        <div className="mainheader">
            <div className="elementsrow">
                <div className="LogoAndSlogan">
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

                <a href="/searchpage/" style={{ textDecoration: "none" }}>
                    <div className="poiskLink">
                        <img src={poisk} alt="" className="poisk" />
                        <p className="link">Поиск</p>
                    </div>
                </a>
                <a href="/catalog/" className="link">
                    <p>Каталог</p>
                </a>
                <a href="/news/" className="link">
                    <p>Новости</p>
                </a>
                <a href="/premium/" className="link">
                    <p>
                        <u>
                            <b>PREMIUM</b>
                        </u>
                    </p>
                </a>
            </div>
        </div>
    );
};

export default MainHeader;
