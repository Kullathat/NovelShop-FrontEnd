import { Link } from "react-router-dom";
import AddressInput from "../features/AuthAddress/AddressInput";
import { useState } from "react";
export default function AddressPaget() {
    const [input, setInput] = useState({
        city: '',
        country: '',
        province: '',
        zipcode: '',
    });
    return (<form className=" p-40  text-4xl">
        <div >
            <nav className=" justify-center flex p-10"> Address</nav>
        </div>
        <div className=" grid grid-cols-3 gap-10">
            <div>
                <div>
                    <AddressInput
                        placeholder='first name'
                        name='userName'
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='last name'
                        name='lastName'
                    />
                </div>
            </div>

            <div>
                <div>
                    <AddressInput
                        placeholder='city'
                        name='city'
                        value={input.city}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Country'
                        name='country'
                        value={input.country}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Province'
                        name='province'
                        value={input.province}
                    />
                </div>
            </div>
            <div>
                <div>
                    <AddressInput
                        placeholder='Postal/Zipcode'
                        name='zipcode'
                        value={input.zipcode}
                    />
                </div>
            </div>

            <div className="mx-auto col-span-full text-center p-5 m-15">
                <div>
                    <button className=" bg-black text-white text-base py-1 px-10 rounded-2xl">
                        <Link to='/Payment'>Purchase</Link>
                    </button>
                </div>
                <div>
                </div>
            </div>
        </div>
    </form>
    )
}