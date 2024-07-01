import { createMusicParts } from "../SearchPage/musicData";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Catalog.scss";
import arrow from "../upload/arrow.svg";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const FilterArrow = ({ sortConfig, objectNames, index }) => {
  return (
    sortConfig.key === objectNames[index] && (
      <img
        src={arrow}
        alt="arrow"
        className={sortConfig.direction === "ascending" ? "rotate" : ""}
      />
    )
  );
};

const Catalog = () => {
  const [musicParts, setMusicParts] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortedMusicParts = React.useMemo(() => {
    let sortableItems = [...musicParts];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [musicParts, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      searchParams.get("sortBy") === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSearchParams({ sortBy: key, direction });
  };

  const objectNames = ["name", "song", "instrument", "format", "price"];

  const getLink = (name, song) => {
    if (name === "Бетховен Людвиг ван" && song === "Лунная Соната") {
      return "/catalog/bethovenlunnayasonata/";
    }
    if (
      name === "Моцарт Вольфганг Амадей" &&
      song === "Фортепианный концерт №. 21 до мажор, К. 467"
    ) {
      return "/catalog/mozartpianoconcerto21/";
    }
    if (name === "Франческо Гаспарини" && song === "Адорамус те") {
      return "/catalog/gaspariniadoramuste/";
    }
    if (name === "Людвиг Ван Бетховен" && song === "К Элизе") {
      return "/catalog/beethovenfurelise/";
    }
    if (name === "Пётр Ильич Чайковский" && song === "Лебединое озеро") {
      return "/catalog/chaykovskyswanlake/";
    }
    if (name === "Пётр Ильич Чайковский" && song === "Времена года") {
      return "/catalog/chaykovskyvremenagoda/";
    }
    if (
      name === "Луиджи Боккерини" &&
      song === "Соната для виолончели соль мажор, G.5"
    ) {
      return "/catalog/boccherinisonatag5/";
    }
    if (
      name === "Иоганнес Брамс" &&
      song === "Венгерский танец № 5 (фа–диез минор)"
    ) {
      return "/catalog/brahmsHungariandance5/";
    }
    if (
      name === "Моцарт Вольфганг Амадей" &&
      song === "Маленькая ночная серенада"
    ) {
      return "/catalog/mocartMalenkayanochnayaserenada/";
    }
    if (
      name === "Сергей Рахманинов" &&
      song === "Фортепианный концерт №2 (до минор)"
    ) {
      return "/catalog/rachmaninovpianoconcerto2/";
    }
    return "#";
  };

  useEffect(() => {
    setMusicParts(createMusicParts());
  }, []);

  useEffect(() => {
    if (searchParams.get("sortBy") && searchParams.get("direction"))
      setSortConfig({
        key: searchParams.get("sortBy"),
        direction: searchParams.get("direction"),
      });
  }, [searchParams]);

  return (
    <div className="MainBlock">
      <Helmet>
        <title>Каталог</title>
      </Helmet>
      <table className="musicTable">
        <thead>
          <tr>
            <th onClick={() => requestSort(objectNames[0])}>
              <div className="thContainer">
                <h3>Композитор</h3>
                <FilterArrow
                  sortConfig={sortConfig}
                  objectNames={objectNames}
                  index={0}
                />
              </div>
            </th>
            <th onClick={() => requestSort(objectNames[1])}>
              <div className="thContainer">
                <h3>Название</h3>
                <FilterArrow
                  sortConfig={sortConfig}
                  objectNames={objectNames}
                  index={1}
                />
              </div>
            </th>
            <th onClick={() => requestSort(objectNames[2])}>
              <div className="thContainer">
                <h3>Инструмент</h3>
                <FilterArrow
                  sortConfig={sortConfig}
                  objectNames={objectNames}
                  index={2}
                />
              </div>
            </th>
            <th onClick={() => requestSort(objectNames[3])}>
              <div className="thContainer">
                <h3>Формат</h3>
                <FilterArrow
                  sortConfig={sortConfig}
                  objectNames={objectNames}
                  index={3}
                />
              </div>
            </th>
            <th onClick={() => requestSort(objectNames[4])}>
              <div className="thContainer">
                <h3>Стоимость</h3>
                <FilterArrow
                  sortConfig={sortConfig}
                  objectNames={objectNames}
                  index={4}
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedMusicParts.map((part, index) => (
            <tr key={index}>
              <td>
                <Link to={getLink(part.name, part.song)}>{part.name}</Link>
              </td>
              <td>
                <Link to={getLink(part.name, part.song)}>{part.song}</Link>
              </td>
              <td>{part.instrument}</td>
              <td>{part.format}</td>
              <td>{part.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Catalog;
