
import axios from "../../config/axios"
import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BookForm() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/item/allbook')
            .then(res => {
                setData(res.data.product)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const getInCart = async cart => {
        try {
            await axios.post('/item/cart', cart)
        } catch (err) {
            console.log(err);
        }
    }

    const handleCartInput = (id) => {
        getInCart({
            userId: id,
            bookId: id,
            quantity: ''
        })
        toast('you get Item')
        
    }


    return (data?.map((product, index) => (
        <>
            <div key={index} >
                <div className="col-span-2 m-3">
                    <img src={product.bookImage} className=" h-80" />
                    <div className=" m-5"> {product.bookName} </div>

                    <div className=" m-5 flex justify-between">
                        {product.price} bath
                        <button
                            onClick={() => handleCartInput(product.id)} className="bg-black text-white  py-1 px-1 rounded-md text-base hover:animate-pulse hover:bg-red-500">Add to Cart</button>
                            <ToastContainer />
                    </div>

                </div>
            </div>
        </>
    )
    ))

}


