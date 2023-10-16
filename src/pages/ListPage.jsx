import { PRODUCTS } from "../MockData/Data";
import Product from '../MockData/Product';

export default function ListPage() {
    return (
    <form>
        <div className="text-4xl  m-5 ">
        All Book
        </div>
        <div className="  w-[100%] p-4 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center text-center">
            {PRODUCTS.map((product) => (
                <Product data = {product}/>
            ))}
        </div>
    </form>
    )
}