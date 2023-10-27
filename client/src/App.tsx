import './index.scss';
import { Routing } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/Header";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { auth } from "./api/userApi";
import { Spinner } from "./components/Spinner";

const App = observer(() => {
    const {user}: any = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth().then(data => {
            user.setUser(true);
            user.setIsAuth(true);
        }).finally(() => setLoading(false))
    }, [user])

    if (loading) return <Spinner/>

    return (
        <ErrorBoundary>
            <Header/>
            <Routing/>
        </ErrorBoundary>
    );
})

export default App;
