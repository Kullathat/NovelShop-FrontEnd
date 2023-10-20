import { useAuth } from '../hooks/use-auth';
import '../layout/logo.css'
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
export default function Header() {
    const { authUser } = useAuth()
    return (
        <header className=" py-5 bg-gray-500 ">
            <div className="flex justify-between">
                <div className=" flex gap-7 m-1">
                    <h1 className=' animate-pulse text-stone-50 hover:text-black'>Novelshop </h1>
                      <Link to="/"><button className=" bg-black text-white rounded-md w-36 h-10  hover:bg-red-700">
                       Home
                    </button></Link>
                    <button className=" bg-black text-white rounded-md w-36 h-10 hover:bg-red-700">
                        <Link to="allbook">List</Link>
                    </button>
                    <input placeholder='search....' className=" border-l-black rounded-md gap-y-5 hover:text-black" />
                </div>
                <div className="flex gap-7 m-1">
                    <div>
                        {authUser ? (
                            <div></div>
                        ) : (
                            <button className=" bg-black text-white rounded-md w-36 h-10   hover:bg-red-700">
                                <Link to='Register'> Sign up</Link>
                            </button>
                        )}
                    </div>
                    <button className=" bg-black text-white  rounded-md w-36 h-10  hover:bg-red-700">
                        <Link to="Cart"> Cart</Link>
                    </button>
                    <div>
                        {authUser ? (
                            <button className=" bg-black text-white  rounded-md w-36 h-10  hover:bg-red-700"><Dropdown/></button>
                            
                        ) : (
                            <button className=" bg-black text-white  rounded-md w-36 h-10  hover:bg-red-700">
                                <Link to="Login"> Sign In</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}



