import { useAuth } from '../hooks/use-auth';
import Dropdown from './Dropdown';
export default function userBotton() {
    const { authUser } = useAuth()
    return(
        <div>
            {authUser.firstName}
            <Dropdown/>
        </div>
    )
}