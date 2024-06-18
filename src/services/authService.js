// authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://7b483f0e2cda296e.mokky.dev';

const register = async (firstName, lastName, birthDate, email, newsletter, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            firstName,
            lastName,
            birthDate,
            email,
            newsletter,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        });
        // Сохранение данных пользователя в localStorage
        localStorage.setItem('user', JSON.stringify({ firstName, lastName, email }));
        return response.data;
    } catch (error) {
        console.error('Ошибка при регистрации!', error);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, {
            email,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        });
        // Предполагаем, что данные пользователя возвращаются в response.data
        const { firstName, lastName } = response.data;
        localStorage.setItem('user', JSON.stringify({ firstName, lastName, email }));
        return response.data;
    } catch (error) {
        console.error('Ошибка при авторизации!', error);
        throw error;
    }
};

export default {
    register,
    login,
};
