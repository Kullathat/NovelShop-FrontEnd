import { useEffect, useState } from "react"
import axios from "../../config/axios"
export default function OrderProduct() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        axios.get('/payment/getOrder')
            .then(res => {
                setCart(res.data.getOrder)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (cart?.map((product, index) => (
        <div key={index} className=" justify-start flex ">
            <div >
                <img src={product.book.bookImage} className=" w-20 h-32 m-5" />
                <div className=" text-center font-mono text-sm">
                    <div>
                        {product.quantity}
                    </div>
                </div>

            </div>

        </div>
    )
    ))
}