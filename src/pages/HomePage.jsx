import MiddleBar from "../layout/MiddleBar";
import pic1 from '../assets/CallOfCthulhu.jpg'
import pic2 from '../assets/theWitcher.jpg'
import pic3 from '../assets/EnderGame.jpg'
import pic4 from '../assets/TheLordOfTheRing.jpg'
import pic5 from '../assets/harrypotter.jpeg'
import pic6 from '../assets/PerciJackSon.jpg'
export default function HomePage() {

    return (
        <form >
            <div >
                <img src="https://c4.wallpaperflare.com/wallpaper/668/103/672/cthulhu-h-p-lovecraft-artwork-octopus-wallpaper-preview.jpg"
                    alt="home logo" className=" w-full h-96 " />
            </div>
            <div className="text-4xl  m-5  hover:text-red-500 animate-bounce">
                Best Seller
            </div>
            <div className=" flex col-span-3 gap-20 m-10 justify-center text-center">
                <div>
                    <img src={pic1} className=" h-96 m-5" />
                    The Call of Cthulhu
                </div>
                <div>
                   <img src={pic2} className="h-96 m-5" />
                    The witcher
                </div>
                <div>
                    <img src={pic3} className="h-96 m-5" />
                    Ender Game</div>
            </div>
                <MiddleBar/>
    
            <div className="text-4xl  m-5  hover:text-red-500 animate-bounce">
                NEW!!!</div>
            <div className=" flex col-span-3 gap-20 m-10 justify-center text-center">
                <div>
                    <img src={pic4} className="h-96 m-5" />
                    The Lord Of The Ring
                </div>
                <div>
                    <img src={pic6}  className="h-96 m-5" />
                    Perci Jackson
                </div>
                <div>
                    <img src={pic5}  className="h-96 m-5"/>
                    Harry Potter
                </div>
            </div>
        </form>
    )
}