import "./Login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import authService from "../../services/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Используем хук useNavigate для перенаправления

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await authService.login(email, password);
            console.log("Авторизация успешна!", response);
            // Перенаправляем на страницу профиля
            navigate("/profile");
        } catch (error) {
            console.error("Ошибка при авторизации!", error.response || error);
            setErrorMessage(
                "Неправильный email или пароль. Пожалуйста, попробуйте снова."
            );
        }
    };

    return (
        <div className="Mainn">
            <form onSubmit={handleSubmit} className="LoginForm">
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
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
                <button type="submit" className="LoginButton">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Login;
