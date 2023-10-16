import LogoFooter from "./logoFooter";

export default function Footer() {
    return (
        <div className="bg-gray-500 py-4     text-base ">
            <div className=" m-3 text-center">
                <div>contact</div>
                <div >phone : 02-111-1111</div>
            </div>
            <div>
                <LogoFooter />
            </div>
        </div>
    )
}