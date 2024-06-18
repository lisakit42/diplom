import React from "react";
import "./SecondHeader.scss";

const SecondHeader = () => {
  return (
    <div className="secondheader">
      <div className="secondlementsrow">
        <a href="/registration/" className="linkSecondHeader">
          <p>Избранное</p>
        </a>
        <a
          href={localStorage.getItem("user") ? "/profile" : "/authorization"}
          className="linkSecondHeader"
        >
          <p>Личный кабинет</p>
        </a>
      </div>
    </div>
  );
};

export default SecondHeader;
