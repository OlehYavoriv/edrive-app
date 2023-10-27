import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (first_name: string, last_name: string, email: string, password: string) => {
    const {data} = await $host.post('api/user/registration', {first_name, last_name, email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const auth = async () => {
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};
