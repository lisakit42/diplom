import "./Login.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet"; // Импортируйте Helmet

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
    };

    return (
        <div className="MainLogin">
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <div className="fields-container">
                    <div className="login">
                        <label htmlFor="login" style={{ display: "block" }}>
                            Логин:
                        </label>
                        <input
                            type="text"
                            id="login"
                            value={login}
                            onChange={handleLoginChange}
                            required
                            style={{
                                padding: "5px",
                                border: "1px solid #4D331F",
                                background: "#E6B17E",
                            }}
                        />
                    </div>
                    <div className="login">
                        <label htmlFor="password" style={{ display: "block" }}>
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            style={{
                                padding: "5px",
                                border: "1px solid #4D331F",
                                background: "#E6B17E",
                            }}
                        />
                    </div>
                </div>
                <button type="submit" className="Loginbutton">
                    Войти
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
