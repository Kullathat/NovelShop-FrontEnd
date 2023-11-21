import { createContext, useEffect, useState } from "react";
import axios from '../config/axios'
import { addAccessToken, getAccessToken , removeAccressToken  } from "../utils/token-storage";


// return ค่าให้ดึงออกไปใช้ได้
export const Authcontext = createContext();
export default function AuthcontextProvider({ children }) {
    // user ไม่มีการ login 
    const [authUser, setAuthUser] = useState(null);

    // useRffect ทำงานหลัง first render 
    useEffect(() => {
        if (getAccessToken()) {
            axios.get('/auth/me ').then(res => {
                setAuthUser(res.data.user);
            })
        }
    }, []);

    const [initLoading, setInitLoading] = useState(false);
    // useEffect(() => { }, [])
    const login = async signIn => {
        try {
            const res = await axios.post('/auth/login', signIn)
            addAccessToken(res.data.accessToken)
            setAuthUser(res.data.user);
        } catch (err) {
            console.log(err);
        }
    }

    const register = async registerInputObject => {
        const res = await axios.post('/auth/register', registerInputObject);
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)
    }
    const logout = () => {
        removeAccressToken();
        setAuthUser(null);
      };

    // app เป็น children ดึงไปใช้่ได้
    return <Authcontext.Provider 
    value={{ login, 
        authUser,
         register
         ,logout,
         initLoading, 
         setInitLoading
        }}> {children}</Authcontext.Provider>
}

