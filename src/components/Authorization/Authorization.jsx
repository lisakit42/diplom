import "./Authorization.scss";
import LoginForm from "../Login/Login";

const Authorization = () => {
    return (
        <div className="Mainn">
            <div className="MainWindow">
                <LoginForm />
                <div className="register-link">
                    Нет аккаунта? <br />
                    <a href="/registration/" className="register-link-style">
                        Зарегистрироваться
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
