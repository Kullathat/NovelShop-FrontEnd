import { useState } from "react";
import CreateFormInput from "./createFormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminCreateForm() {
    const navigate = useNavigate()
    const [picture, setPicture] = useState(null)
    const [dataBook, setDataBook] = useState({
        bookName: '',
        price:'',
        description:'',
        author:'',
        bookImage:''
    })
    
    const uplodeBook = () => {
        axios.post('admin/addItem',dataBook)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        uplodeBook()
        navigate('/admin/main')
        
    }
    const handleChangeData = e => {
        setDataBook({ ...dataBook, [e.target.name]: e.target.value })
    }


return (
    <form className=" grid gap-y-5 justify-center p-40 " onSubmit={handleSubmit}>
        <div className=" justify-center grid gap-2">
            {picture ? (
                <img src={URL.createObjectURL(picture)} className=" w-32 h-32" />
            ) : null}
            <label>Your Image book</label>
            <input
                name='bookImage'
                type='file'
                placeholder='Your Book Image'
                onChange={(e) => {
                    if (e.target.files[[0]]) {
                        setPicture(e.target.files[[0]]);
                    }
                }}
            />
        </div>
        <div className=" justify-center grid gap-2">
            <label>BookName</label>
            <CreateFormInput
                name='bookName'
                type='text'
                placeholder='BookName'
                onChange={ handleChangeData}
            />
        </div>
        <div className=" justify-center grid gap-2">
            <label>Author</label>
            <CreateFormInput
                name='author'
                type='text'
                placeholder='Author'
                onChange={ handleChangeData}
            />
        </div>
        <div className=" justify-center grid gap-2">
            <label>Description</label>
            <textarea 
            rows={10} cols={40}
                name='description'
                placeholder='description'
                onChange={ handleChangeData}
            />
        </div>
        <div className=" justify-center grid gap-2">
            <label>Price</label>
            <CreateFormInput
                name='price'
                type='text'
                placeholder='Price'
                onChange={ handleChangeData}
            />
        </div>
        <div className=" justify-center grid">
            <button className=" bg-red-500 w-20  h-8"> confirm</button>
        </div>
    </form>
)
}