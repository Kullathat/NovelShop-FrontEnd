import qrPic from '../../assets/qrcode.svg'
import { useRef, useState } from 'react'
import axios from '../../config/axios';
import { useNavigate } from 'react-router-dom';



export default function PaymentForm() {
    const [file, setFile] = useState(null);
    const inputEl = useRef(null)
    const navigate = useNavigate();

    const updateSlip = async data => {
        return  await axios.patch('/payment/uploadSlip',data)   
    }
    const uploadSlip = async () => {
        try {
            const formData = new FormData();
            console.log(file)
            formData.append('slip', file);
            await updateSlip(formData);
           navigate('/')
           {alert('Success')}
        } catch (err) {
            console.log(err)
        } 
    }
    

    return (
        <div className=' grid gap-y-5 text-center p-40  text-4xl' >
            <div>Payment</div>
            <div className='justify-center flex p-10'>
                <img src={qrPic} />
            </div>
            <div className=' justify-center'>
                <input type="file"
                    ref={inputEl}
                    className='hidden'
                    onChange={e => {
                        if (e.target.files[0]) {
                          setFile(e.target.files[0]);
                        }
                      }}
                />
            </div>

            <div>
                <button  onClick={() => inputEl.current.click()} >Choose Picture</button>
                <div></div>

                <button onClick={uploadSlip} className=" bg-black text-white rounded-md w-36 h-10  hover:bg-red-700 m-6 text-lg" >confirm </button> 
            </div>

        </div>
    )
}