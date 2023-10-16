// import { createContext, useState } from "react"
// import {PRODUCT} from '../../MockData/Product'

// export const shopContext = createContext(null);


// const getDefaultCart = () => {
//     let cart = {}
//     for (let i = 1; i < PRODUCT.length; i++) {
//         cart[i] = 0 ;
//     }
//     return cart
// }

// export default function ShopContextProvider (props) {
//     const [cartItem,setCartItem] = useState(getDefaultCart());

//     const addToCart = (itemId) = {
//         setCartItem((prev) => ({...prev , [itemId]: prev[itemId] + 1 }));
//     };
//     const removeFromCart = (itemId) = {
//         setCartItem((prev) => ({...prev , [itemId]: prev[itemId] + 1 }));
//     };

//     const contextValue = {cartItem,addToCart,removeFromCart}
//     return <ShopContextProvider value=''>{props.children}</ShopContextProvider>
// }