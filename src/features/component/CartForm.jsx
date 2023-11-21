
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useCart } from "../../hooks/use-cart";


export default function CartForm() {
    const [data, setData] = useState([])
    const { granTotal, setGranTotal } = useCart()
    const { totalQuantity, setTotalQuantity } = useCart()

    const getCartItem = () => axios.get('/item/cartItem')
        .then(res => {
            setData(res.data.cartItem)
            const totalQuantity = res.data.cartItem.reduce((amount, item) => {
                // console.log(item)
                amount += item.quantity
                return amount

            }, 0)
            setTotalQuantity(totalQuantity)
            const total = res.data.cartItem.reduce((acc, item) => {
                acc += item.book.price * item.quantity
                return acc
            }, 0)
            setGranTotal(total)

        })
        .catch(err => {
            console.log(err)
        })

    useEffect(() => {
        getCartItem()
    }, [])
    const deleteInCart = async cartId => {
        try {
            await axios.delete(`/item/deleteItem/${cartId}`)
            getCartItem()

        } catch (err) {
            console.log(err)
        }
    }




    return (data?.map((product, index) => (
        <div key={index}>
            <div className=" col-span-2 flex justify-center gap-24 m-20 ">
                <img src={product.book.bookImage} className=" h-72" />
                <div className="  bg-white w-full rounded-md" >
                    <div className=" flex justify-between">
                        <div className=" m-10">{product.book.bookName}</div>
                        <div className=" m-10">{product.book.price}</div>
                    </div>
                    <div className=" flex justify-between m-10 ">
                        <div className=" text-3xl">
                            {product.quantity}
                        </div>
                        <div>
                            <button onClick={() => { deleteInCart(product.id) }}>
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )))
}

