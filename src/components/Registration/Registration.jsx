import "./Registration.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { Helmet } from "react-helmet";

const Registration = () => {
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        newsletter: false,
        password: "",
    });
    const [agreement, setAgreement] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!agreement) {
            alert(
                "Вы должны принять политику конфиденциальности и согласие на обработку данных"
            );
            return;
        }

        try {
            const response = await register(fields);
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
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="RegistrationForm">
                <div className="form-group">
                    <label htmlFor="firstName">Имя:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={fields.firstName}
                        onChange={(e) =>
                            setFields({ ...fields, firstName: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Фамилия:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={fields.lastName}
                        onChange={(e) =>
                            setFields({ ...fields, lastName: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="birthDate">Дата рождения:</label>
                    <input
                        type="date"
                        id="birthDate"
                        value={fields.birthDate}
                        onChange={(e) =>
                            setFields({ ...fields, birthDate: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Электронная почта:</label>
                    <input
                        type="email"
                        id="email"
                        value={fields.email}
                        onChange={(e) =>
                            setFields({ ...fields, email: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={fields.password}
                        onChange={(e) =>
                            setFields({ ...fields, password: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={fields.newsletter}
                            onChange={(e) =>
                                setFields({
                                    ...fields,
                                    newsletter: e.target.checked,
                                })
                            }
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
                        Я согласен с{" "}
                        <a href="/privacy" className="highlight-link">
                            политикой конфиденциальности и согласием на
                            обработку персональных данных
                        </a>
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
