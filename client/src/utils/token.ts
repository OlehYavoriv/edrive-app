import jwt_decode from "jwt-decode";

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};

export const decodeToken = (token: string | null) => {
    if (token) {
        return jwt_decode(token);
    } else {
        return null;
    }
};
