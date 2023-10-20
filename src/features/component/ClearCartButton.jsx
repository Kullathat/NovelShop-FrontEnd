import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ClearCartButton() {
    const [cart, setCart] = useState([])

    useEffect(() => {

    }, [])
    const getProductInOrder = async () => {
        try {
            await axios.delete('/payment/getProductInOrder',cart)
            setCart()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Link to='/payment'>
            <button onClick={() => { getProductInOrder() }}
                className=" bg-black text-white text-base py-1 px-10 rounded-2xl hover:bg-red-500">
                Payment
            </button>
        </Link>
    )
}