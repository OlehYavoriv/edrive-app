import { createContext } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserStore from "./store/UserStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export interface IContextProviderProps {
    user: UserStore;
}

export const Context = createContext<IContextProviderProps | null>(null);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Context.Provider>
)
