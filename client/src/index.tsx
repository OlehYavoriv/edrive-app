import { createContext } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserStore from "./store/UserStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TestStore from "./store/TestStore";

export interface IContextProviderProps {
    user: UserStore;
    test: TestStore;
}

export const Context = createContext<IContextProviderProps | null>(null);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Context.Provider value={{
        user: new UserStore(),
        test: new TestStore()
    }}>
        <Router>
            <App/>
            <ToastContainer/>
        </Router>
    </Context.Provider>
)
