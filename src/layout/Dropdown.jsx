import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/use-auth';
import { useRef } from 'react';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownEl = useRef(null);

    const { logout, authUser } = useAuth();

    useEffect(() => {
        const handleClickOutside = e => {
            if (!dropDownEl.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropDownEl}>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {authUser.firstName}
                {isOpen && (
                    <div className=" w-28 h-20 absolute bg-gray-500 right-0  border rounded-xl p-2">
                        <div
                            className="flex gap-10 p-1 items-center cursor-pointer hover:bg-black "
                            onClick={logout}
                        >
                            <div className="  flex text-right">
                                <div className="font-semibold text-sm ">Log out</div>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    )

}
