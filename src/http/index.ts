import axios from "axios";
import { localStorageKeyToken } from "../utils/consts";


const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem(localStorageKeyToken)}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
}