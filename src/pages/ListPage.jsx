import BookForm from "../features/component/BookForm";


export default function ListPage() {

    return (<div>
        <div >
            <img src="https://c4.wallpaperflare.com/wallpaper/668/103/672/cthulhu-h-p-lovecraft-artwork-octopus-wallpaper-preview.jpg"
                alt="home logo" className=" w-full h-96 " />
        </div>
        <div className="  w-[100%] p-4 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center text-center">

            < BookForm/>
        </div>  
    </div>
    )
}
