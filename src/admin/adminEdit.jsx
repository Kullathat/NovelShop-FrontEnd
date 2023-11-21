import { useNavigate } from "react-router-dom";
import axios from "../config/axios"
import { useState, useEffect } from "react"

export default function AdminPage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/item/allbook')
            .then(res => {
                setData(res.data.product)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    
    const handleClickData =  () => {
        axios.get('/    ')
    }

    return (data?.map((product, index) => (
        <>
            <div key={index} className=" items-center" >
                <div className="flex justify-between">
                    <img src={product.bookImage} className=" h-40" />
                    <div className=" m-5"> {product.bookName} </div>

                    <div className=" m-5 flex justify-between">
                        {product.price} bath
                    </div>
                    <div>
                        <button 
                        onClick={()=> {navigate('/admin/edit')}}
                        className=" m-5 bg-orange-500  ">Edit</button>
                        
                    </div>
                    <div>
                        <button 
                        onClick={()=> {navigate('/admin/create')}}
                        className=" m-5 bg-green-500  ">create</button>
                    </div>
                </div>
            </div>
        </>
    )
    ))

}