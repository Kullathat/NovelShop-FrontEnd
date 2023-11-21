import axios from "axios"
import { useEffect, useState } from "react"
import ConfirmButton from "../features/component/confirmButton"
import { useAdmin } from "../hooks/use-admin"


export default function ApproveAdmin() {
    const [data, setData] = useState([])
    const { hdl_confirm } = useAdmin()
    useEffect(() => {
        axios.get('/admin/all')
            .then(res => {
                setData(res.data.result)    
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    const deleteOrder = async orderId => {
        try {
            await axios.delete(`/admin/delete/${orderId}`)
          const res =   await axios.get('/admin/all')
          setData(res.data.result)
        } catch (err) {
            console.log(err)
        }
    }
    console.log(data)
    return (
        (data?.map((el, index) => (
            <div key={index}>
                <div className=" flex gap-5 justify-between m-5">
                    <div>{el.id}</div>
                    <div>{el.user?.userName}</div>
                    <div>{el.totalPrice}</div>
                    <div>
                        <img src={el.slip} className="h-8 w-8" />
                    </div>
                    <div>{el.date}</div>
                    <div>{el.status}</div>
                    <ConfirmButton
                        className=" bg-green-500 w-16 h-8"
                        text='confirm'
                        onClick={hdl_confirm}
                    />
                    <ConfirmButton
                        className=" bg-red-500 w-16 h-8"
                        text='Delete'
                        onClick={()=> {deleteOrder(el.id)}}
                    />
                </div>
                <br />
                <br />

            </div>
        )
        ))
    )
}