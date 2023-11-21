import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth'

// ถ้า authuser มีค่าจะ return homePage
export default function RedirectIfAuthenticated({ children }) {
    const { authUser }  = useAuth(); 
    if ( authUser ) {
        return <Navigate to= "/" />
    }
    return children;
}