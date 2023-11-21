import { useEffect ,useState} from "react"
import axios from "../../config/axios"

export default function ConfirmOrder() {
    
    const [cart, setCart] = useState()

    
    useEffect(() => {
        axios.get('/payment/getOrder')
            .then(res => {
                setCart(res.data.getOrder)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleOrderInput = () => {
        cart.map( async el =>  {      
            await axios.post('/payment/createOrderFromCart', {
            bookId:el.bookId,
            totalPrice: el.quantity * el.book.price,
            quantity: el.quantity,
        });
        alert('success')
    })
  
    };
    
    return (
        <div>
        <button
         className=" bg-black text-white text-base py-1 px-10 rounded-2xl hover:bg-red-500"
        
        onClick={handleOrderInput}>confirm orders</button>
        <div>


        </div>
    </div>
  
    )
}