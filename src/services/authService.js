// authService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://7b483f0e2cda296e.mokky.dev";

export const register = async (fields) => {
  return await axios
    .post(`${API_URL}/register`, fields, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.data));
    })
    .catch((error) => {
      console.error("Ошибка при регистрации!", error);
      return error;
    });
};

export const login = async (email, password) => {
  return await axios
    .post(
      `${API_URL}/auth`,
      {
        email,
        password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log("Авторизация успешна!", res.data.data);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};
