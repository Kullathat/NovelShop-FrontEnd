import {createContext, useEffect, useState } from "react";
import axios from '../config/axios'

export const CartContext = createContext()
export default function CartContextProvider({children}) {
    const [data, setData] = useState()
    const [granTotal,setGranTotal]=useState()
    const [totalQuantity,setTotalQuantity] = useState()
    useEffect(() => {
        axios.get('/auth/allbook')
            .then(res => {
                setData(res.data.product)
            })
            .catch(err => console.log(err))

    }, [])

    
return <CartContext.Provider value={{data,setGranTotal,granTotal,totalQuantity,setTotalQuantity}}>{children}</CartContext.Provider>
}