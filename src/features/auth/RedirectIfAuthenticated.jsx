import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth'

// ถ้า authuser ไม่มีค่าจะ return loginpage 
export default function RedirectIfAuthenticated({ children }) {
    const { authUser }  = useAuth(); 
    if ( authUser ) {
        return <Navigate to= "/" />
    }
    return children;
}