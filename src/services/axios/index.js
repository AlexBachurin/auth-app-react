import axios from "axios";
import Cookies from "js-cookie";

//Инстанс с url до бэка
const axiosInstance = axios.create({
    baseURL: "http://nestjs-boilerplate-test.herokuapp.com/api",
});

//перехватчик для добавления тока авторизации в хеадер если он есть в cookie
axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");

        if (authToken) {
            config.headers.authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;