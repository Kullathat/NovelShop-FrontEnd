import {  useState } from 'react'
import LoginInput from '../../features/auth/Logininput'
import { useAuth } from '../../hooks/use-auth';

export default function LoginForm() {
    const [input,setInput] = useState({
        userName: '',
        password: ''
    });

    const { login } = useAuth();

    const handleSubmitForm = e => {
        e.preventDefault();
        login(input);
        //ทำเป็น object ส่ง object 
    }


    // เรียกใช้ ้้hook

    return (
        // ป้องกัน form ไปที่ server
        <form className="grid gap-y-5 justify-center p-40 " onSubmit={handleSubmitForm}>
            <div >
                <nav className=" justify-center flex p-10 font-bold text-4xl"> SIGN UP</nav>
            </div>
            <div>
                <div >
                    <LoginInput
                        placeholder='username' 
                        value={input.userName}
                        onChange={e => setInput({...input, userName: e.target.value})}/>
                        
                </div>
            </div>
            <div>
                <div>
                    <LoginInput
                        placeholder='password'
                        type='password'
                        value={input.password} 
                        onChange={e => setInput({...input, password: e.target.value})}/>
                </div>
            </div>
            <div>
                <div className=" mx-auto col-span-full text-center p-5">
                    <button className=" bg-black text-white text-lg py-1 px-10 rounded-2xl ">Submit</button>
                </div>
            </div>
        </form>
    )
}