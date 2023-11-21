import {createContext,  useState} from "react";
// import axios from "../config/axios";

export const CartContext = createContext()
export default function CartContextProvider({children}) {

    const [granTotal,setGranTotal]=useState()
    const [totalQuantity,setTotalQuantity] = useState()
    const [cart, setCart] = useState()

    

    
return <CartContext.Provider value={{setGranTotal,granTotal,totalQuantity,setTotalQuantity,cart}}>{children}</CartContext.Provider>
}