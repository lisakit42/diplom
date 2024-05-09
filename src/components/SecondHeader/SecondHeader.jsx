import React from "react";
import "./SecondHeader.scss";

const SecondHeader = () => {
  return (
    <div className="secondheader">
      <div className="secondlementsrow">
        <a href="/authorization/" className="linkSecondHeader">
          <p>Избранное</p>
        </a>
        <a href="/authorization/" className="linkSecondHeader">
          <p>Личный кабинет</p>
        </a>
      </div>
    </div>
  );
};

export default SecondHeader;
