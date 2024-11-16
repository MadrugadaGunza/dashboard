import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStorage } from './contexts/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStorage>
        <App />
    </GlobalStorage>
);
