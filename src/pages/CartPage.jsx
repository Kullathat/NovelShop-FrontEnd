import { Link } from "react-router-dom";
import CartForm from "../features/component/CartForm";
import { useCart } from "../hooks/use-cart";
export default function Cart() {
    const { granTotal } = useCart()
    const { totalQuantity } = useCart()
 
    return (
        <div  >
            <CartForm className=' font-serif text-xl   ' />
            <div className=" flex justify-between m-20 text-xl font-serif">

                <div>
                    Total Quantity:  {totalQuantity }
                </div>
                <div>
                    Total price:  {granTotal}
                </div>
            </div>
            <div className=" flex justify-center m-10 " >
                <Link to='/address'><button className=" bg-black text-white rounded-md w-36 h-10  hover:bg-red-700">Purchase</button>
                </Link>
            </div>
        </div>
    )
}