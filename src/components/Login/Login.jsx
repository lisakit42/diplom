import "./Login.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

function LoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Логин:", login);
        console.log("Пароль:", password);
        window.location.href = "/profile/";
    };

    return (
        <div className="Mainn">
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="LoginForm">
                <div className="form-group">
                    <label htmlFor="login">Логин:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={handleLoginChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className="LoginButton">
                    Войти
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
