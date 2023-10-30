import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoutes, authRoutes, publicRoutes } from "./paths";
import { HOME_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "../index";
import { decodeToken, getTokenFromLocalStorage } from "../utils/token";
import { IUser } from "../utils/interfaces";

export const Routing = () => {
    const {user}: any = useContext(Context);
    const userToken = getTokenFromLocalStorage();
    const decodedToken = decodeToken(userToken) as IUser;

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {(user.isAuth && decodedToken.role === 'ADMIN') && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
};
