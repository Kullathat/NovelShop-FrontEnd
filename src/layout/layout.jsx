import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



export default function Layout() {
    return (
        <div className=' h-screen w-full' >
            <Header />  
            <Outlet />
            <Footer/>
        </div>
    )
}