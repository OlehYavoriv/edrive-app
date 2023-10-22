import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./paths";
import { HOME_ROUTE } from "../utils/consts";

export const Routing = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
};
