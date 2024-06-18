import "./Registration.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [agreement, setAgreement] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!agreement) {
            alert("Вы должны принять пользовательское соглашение");
            return;
        }

        try {
            const response = await authService.register(
                firstName,
                lastName,
                birthDate,
                email,
                newsletter,
                password
            );
            console.log("Регистрация успешна!", response);
            navigate("/profile");
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message === "RESOURCE_USER_ALREADY_EXISTS"
            ) {
                setErrorMessage("Пользователь с таким email уже существует.");
            } else {
                console.error(
                    "Ошибка при регистрации!",
                    error.response || error
                );
                setErrorMessage(
                    "Произошла ошибка при регистрации. Пожалуйста, попробуйте позже."
                );
            }
        }
    };

    return (
        <div className="Mainn">
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
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
                <button type="submit" className="RegisterButton">
                    Зарегистрироваться
                </button>
            </form>
            <div className="login-link">
                Уже есть аккаунт? <a href="/authorization/">Войти</a>
            </div>
        </div>
    );
};

export default Registration;
