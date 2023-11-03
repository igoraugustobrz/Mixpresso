import Menu from "../Common/Menu";
import { useState, useRef } from "react";
import SidebarDefault from "../Sidebar/SidebarDefault";
import DarkModeToggle from "../Common/DarkModeToggle";
import { HiShoppingCart } from 'react-icons/hi'

const Header = () => {

    const [isMenuOppen, setIsMenuOppen] = useState(false);

    const nodeRef = useRef(null);

    return (
        <>
            <header className="container mx-auto py-5">
                <nav>
                    <div className="flex justify-between">
                        <Menu action={() => setIsMenuOppen(!isMenuOppen)} />
                        <div>sa</div>
                        <div className="flex items-center gap-x-4">
                            <HiShoppingCart
                                className=" text-xl text-gray-400 cursor-pointer"
                            />
                            <DarkModeToggle />
                        </div>
                    </div>
                    <SidebarDefault
                        action={() => setIsMenuOppen(!isMenuOppen)}
                        startAnimation={isMenuOppen}
                        nodeRef={nodeRef}
                    />
                </nav>
            </header >
            <hr />
        </>
    )
};

export default Header;
