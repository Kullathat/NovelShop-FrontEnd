import axios from "../../config/axios"
import { useState, useEffect } from "react"


export default function BookForm() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/item/allbook')
            .then(res => {
                setData(res.data.product)
            })
            .catch(err => {
                console.log(err)})

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
    }
    

    return (data?.map((product, index) => (
        
        <div key={index} >
            <div className="col-span-2 m-3">

                <img src={product.bookImage} className=" h-80" />
                <div className=" m-5"> {product.bookName} </div>

                <div className=" m-5 flex justify-between">
                    {product.price} bath
                    <button onClick={()=> handleCartInput(product.id)} className="bg-black text-white  py-1 px-1 rounded-md text-base hover:bg-red-900">Add to Cart</button>
                </div>
             
            </div>
        </div>
    ) 
    ))

}


