import CartButton from "../features/component/CartButton";

export default function Product(props) {
    const { price, bookName, bookImage } = props.data;
    return (
        <div>
            <img src={bookImage} />
            <div className=" col-span-2 m-3">
                <div>   {bookName}
                </div>
                <div className=" m-5 flex justify-between">
                    {price} bath
                    <CartButton/>
                </div>
            </div>
        </div>
    )
}