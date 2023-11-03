import Menu from "../Common/Menu";
import { useState, useRef } from "react";
import SidebarDefault from "../Sidebar/SidebarDefault";
import DarkModeToggle from "../Common/DarkModeToggle";

const Header = () => {

    const [isMenuOppen, setIsMenuOppen] = useState(false);

    const nodeRef = useRef(null);

    return (
        <>
            <header className="dark:bg-black">
                <nav className="container mx-auto py-5">
                    <div className="flex justify-between">
                        <Menu action={() => setIsMenuOppen(!isMenuOppen)} />
                        <div>sa</div>
                        <div className="flex items-center gap-x-4">
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
