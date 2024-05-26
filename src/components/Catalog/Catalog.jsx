import { createMusicParts } from "../SearchPage/musicData";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Catalog.scss";
import arrow from "../upload/arrow.svg";

const FilterArrow = ({ sortConfig, objectNames, index }) => {
    return (
        sortConfig.key === objectNames[index] && (
            <img
                src={arrow}
                alt="abracadabra"
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

    useEffect(() => {
        setMusicParts(createMusicParts());
    }, []);

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
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const objectNames = ["name", "song", "instrument", "format", "price"];

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
                                <a href="/">{part.name}</a>
                            </td>
                            <td>
                                <a href="/">{part.song}</a>
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
