
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthcontextProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthcontextProvider>
    <App />
    </AuthcontextProvider>
)
