
import AddressInput from "../features/AuthAddress/AddressInput";
import { useState } from "react";
import axios from "../config/axios";
import OrderButton from "../features/component/OrderButton";
import ClearCartButton from "../features/component/ClearCartButton";
export default function AddressPaget() {
    const [input, setInput] = useState({
        city: '',
        country: '',
        province: '',
        zipcode: '+',

    });
    const handleChangeInput = e => {
        setInput({
            ...input, [e.target.name]: e.target.value,
        })
    }
    const handleSubmitForm = e => {
        e.preventDefault();
        axios.post('/me/address', input)
            .then(res => {
                setInput(res.data.address)
            })
            .catch(err => console.log(err))
    }
    return (<form className=" p-40  text-4xl" onSubmit={handleSubmitForm}>
        <div >
            <nav className=" justify-center flex p-10"> Address</nav>
        </div>
        <div className=" grid grid-cols-3 gap-10">
            <div>
                <div>
                    <AddressInput
                        placeholder='city'
                        name='city'
                        value={input.city}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Country'
                        name='country'
                        value={input.country}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Province'
                        name='province'
                        value={input.province}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Postal/Zipcode'
                        name='zipcode'
                        value={input.zipcode}
                        onChange={handleChangeInput}
                    />
                </div>
            </div>
        </div>
        <div className=" text-center  p-10">Your order</div>
        <div className=" flex justify-center bg-slate-400 w-full h-72 rounded-xl" >
            <div className=" text-center m-20 ">
                <div className=" flex justify-center">
                    <OrderButton />
                </div>
            </div>
        </div>
        <div className=" col-span-2 justify-between flex m-10 ">
                <button
                onClick={alert('Success')}
                    className=" bg-black text-white text-base py-1 px-10 rounded-2xl hover:bg-red-500">
                    confirm
                </button>
            <ClearCartButton/>
        </div>
    </form >
    )
}