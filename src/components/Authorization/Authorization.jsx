import "./Authorization.scss";
import LoginForm from "../Login/Login";
import { Link } from "react-router-dom";

const Authorization = () => {
    return (
        <div className="Mainn">
            <div className="MainWindow">
                <LoginForm />
                <div className="register-link">
                    Нет аккаунта? <br />
                    <Link to="/registration/" className="register-link-style">
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Authorization;
