import './index.scss';
import { Routing } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/Header";

const App = () => {
    return (
        <ErrorBoundary>
            <Header/>
            <Routing/>
        </ErrorBoundary>
    );
}

export default App;
