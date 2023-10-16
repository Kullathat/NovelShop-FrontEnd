import { Link } from "react-router-dom";

export default function Cart() {
    return (<form>
   Cart Page
            <div>
        <button className=" bg-black text-white text-lg py-1 px-10 rounded-2xl"> 
        <Link to='/Address'>Purchase</Link>
        </button>
        </div>
    </form>
    )
}