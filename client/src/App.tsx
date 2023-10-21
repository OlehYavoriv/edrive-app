import './index.scss';
import { Routing } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
    return (
        <ErrorBoundary>
            <Routing/>
        </ErrorBoundary>
    );
}

export default App;
