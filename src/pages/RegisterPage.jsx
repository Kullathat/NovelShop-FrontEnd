import { useState } from "react";
import Joi from "joi";
import RegisterInput from "../features/auth/registerInput";
import { useAuth } from '../hooks/use-auth'
import InputErrorMessage from '../features/auth/InputErrorMessage'




const registerSchema = Joi.object({
    userName: Joi.string().trim().required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    mobile: Joi.string().trim().required(),
    email: Joi.string().email({ tlds: false }).required()
});
const ValidateRegister = input => { //undefined|| {firstName}...,{lastName}
    const { error } = registerSchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message;
            return acc;
        }, {});
        return result
    }
};

export default function Register() {
    const [input, setInput] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
    });
    const [error, setError] = useState({
    });

    const { register } = useAuth();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = ValidateRegister(input);
        //Validate
        if (validationError) {
            return setError(validationError);
        }
        setError({});
        register(input)
    }

    return (
        <form className="grid gap-y-5 justify-center p-40  text-4xl " onSubmit={handleSubmitForm} >
            <div >
                <nav className=" justify-center flex p-10"> SIGN UP</nav>
            </div>
            <div>
                <div>

                    <RegisterInput
                        placeholder='username'
                        value={input.userName}
                        onChange={handleChangeInput}
                        name='userName'
                    />
                    {error.userName && <InputErrorMessage message={error.userName} />}

                </div>
            </div>
            <div>
                <div>
                    <RegisterInput
                        placeholder='password'
                        value={input.password}
                        type="password"
                        onChange={handleChangeInput}
                        name='password' />
                    {error.password && <InputErrorMessage message={error.password} />}
                </div>
            </div>
            <div>

                <div>
                    <RegisterInput
                        placeholder='first name'
                        value={input.firstName}
                        onChange={handleChangeInput}
                        name='firstName' />
                    {error.firstName && <InputErrorMessage message={error.firstName} />}
                </div>
            </div>
            <div>
                <div>
                    <RegisterInput
                        placeholder='last name'
                        value={input.lastName}
                        onChange={handleChangeInput}
                        name='lastName' />
                    {error.lastName && <InputErrorMessage message={error.lastName} />}
                </div>
            </div>
            <div>
                <div>
                    <RegisterInput
                        placeholder='email'
                        value={input.email}
                        onChange={handleChangeInput}
                        name='email' />
                    {error.email&& <InputErrorMessage message={error.email} />}
                </div>
            </div>
            <div>
                <div>
                    <RegisterInput
                        placeholder='telephone'
                        value={input.mobile}
                        onChange={handleChangeInput}
                        name='mobile' />
                    {error.mobile && <InputErrorMessage message={error.mobile} />}
                </div>
            </div>
            <div>
                <div className=" mx-auto col-span-full text-center p-5">
                    <button className=" bg-black text-white text-lg py-1 px-10 rounded-2xl">Submit</button>
                </div>
            </div>
        </form>

    )
}