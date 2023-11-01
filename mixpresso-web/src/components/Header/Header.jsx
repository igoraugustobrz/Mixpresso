import Menu from "../Common/Menu/Menu";
import { useState, useRef } from "react";
import SidebarDefault from "../Sidebar/SidebarDefault";

const Header = () => {

    const [isMenuOppen, setIsMenuOppen] = useState(false);

    const nodeRef = useRef(null);

    return (
        <>
            <header className="container mx-auto py-5">
                <div className="flex justify-between">
                    <Menu action={() => setIsMenuOppen(!isMenuOppen)} />
                    <div>sa</div>
                    <div>ds</div>
                </div>
                <SidebarDefault
                    action={() => setIsMenuOppen(!isMenuOppen)}
                    startAnimation={isMenuOppen}
                    nodeRef={nodeRef}
                />
            </header >
            <hr />
        </>
    )
};

export default Header;
