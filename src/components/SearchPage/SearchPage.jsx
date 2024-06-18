import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SearchPage.scss";
import { createMusicParts } from "./musicData";
import { Helmet } from "react-helmet";

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { query } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            const musicParts = createMusicParts();
            const filteredResults = musicParts.filter((part) => {
                return (
                    part.name.toLowerCase().includes(query.toLowerCase()) ||
                    part.song.toLowerCase().includes(query.toLowerCase())
                );
            });
            setSearchResults(filteredResults);
        }
    }, [query]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    const getLink = (name, song) => {
        if (name === "Бетховен Людвиг ван" && song === "Лунная Соната") {
            return "/catalog/BethovenLunnayaSonata/";
        }
        if (
            name === "Моцарт Вольфганг Амадей" &&
            song === "Маленькая ночная серенада"
        ) {
            return "/catalog/MozartNochnayaSerenada/";
        }
        // Добавьте дополнительные условия для других композиторов и произведений
        return "#";
    };

    return (
        <div className="SearchPage">
            <Helmet>
                <title>Поиск</title> {/* Установите заголовок страницы */}
            </Helmet>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Поиск по названию или композитору..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Поиск</button>
            </form>
            <div className="search-results">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>
                                <a href={getLink(result.name, result.song)}>
                                    <strong>{result.name}</strong> -{" "}
                                    <span>{result.song}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    query && <h1>Нет результатов по запросу "{query}"</h1>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
