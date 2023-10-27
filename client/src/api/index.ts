import axios, { AxiosInstance } from "axios";

const $host: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});

const $authHost: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
});

const authInterceptor = async (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost };
