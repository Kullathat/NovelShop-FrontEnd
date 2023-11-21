import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthcontextProvider from './context/AuthContext';
import CartContextProvider from './context/CartContext';



ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthcontextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </AuthcontextProvider>
)
