import qrPic from '../../assets/qrcode.svg'
import { useEffect, useRef, useState } from 'react'
import axios from "../../config/axios"

export default function PaymentForm({ children }) {
    const [file, setFile] = useState(null);
    const inputEl = useRef(null)
    const [order,setOrder] = useState([])
    useEffect(() => {

}, [])

    const getInOrder = async order => {
            await axios.post('/payment/getOrderAddIn',order)
    .then(res => {
        setOrder(res.data.orderproduct)
    })
    }
    const handleOrderInput = (id) => {
        getInOrder ({
            userId: id,
            bookId: id,
            quantity: 1,
            totalPrice: 10000
        })  
    }

    return (
        <div className=' grid gap-y-5 text-center p-40  text-4xl' >
            <div>Payment</div>
            <div className='justify-center flex p-10'>
                <img src={qrPic} />
            </div>
            <div className=' justify-center'>
                <input type="file"
                    className=' hidden'
                    ref={inputEl}
                    onChange={e => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0])
                        }
                        // เลือกรูปเเล้วเก็บ state 
                    }}
                />
            </div>
            <div>
                <button onClick={() => { inputEl.current.click() }}>Choose Picture</button>
            </div>
            <div> {children}</div>
            <div>
                <button onClick={() => {handleOrderInput() }}>Confirm Payment</button>
            </div>
          
        </div>
    )
}