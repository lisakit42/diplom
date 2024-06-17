import "./Registration.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [agreement, setAgreement] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!agreement) {
            alert("Вы должны принять пользовательское соглашение");
            return;
        }
        console.log("Имя:", firstName);
        console.log("Фамилия:", lastName);
        console.log("Дата рождения:", birthDate);
        console.log("Электронная почта:", email);
        console.log("Подписка на рассылку:", newsletter);
        console.log("Пользовательское соглашение:", agreement);
    };

    return (
        <div className="Mainn">
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="RegistrationForm">
                <div className="form-group">
                    <label htmlFor="firstName">Имя:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Фамилия:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthDate">Дата рождения:</label>
                    <input
                        type="date"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Электронная почта:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={newsletter}
                            onChange={(e) => setNewsletter(e.target.checked)}
                        />
                        Подписаться на рассылку
                    </label>
                </div>
                <div className="form-group checkbox-group left-align">
                    <label>
                        <input
                            type="checkbox"
                            checked={agreement}
                            onChange={(e) => setAgreement(e.target.checked)}
                            required
                        />
                        Я принимаю пользовательское соглашение
                    </label>
                </div>
                <button type="submit" className="RegisterButton">
                    Зарегистрироваться
                </button>
                <div className="login-link">
                    Есть аккаунт?{" "}
                    <Link to="/authorization" className="login-link-style">
                        Войти
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;
