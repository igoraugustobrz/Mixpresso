import { useState } from "react";
// const [isMenuOppen, setIsMenuOppen] = useState(false);

// const toggleMenu = () => {
//     setIsMenuOppen(!isMenuOppen);
// }

const Menu = () => {
    return (
        <>

            <div className="flex items-center gap-x-3 cursor-pointer">
                <div className="flex flex-col gap-y-0.5">
                    <span className="w-[18px] menu-lines"></span>
                    <span className="w-[14px] menu-lines"></span>
                    <span className="w-[18px] menu-lines"></span>
                    <span className="w-[14px] menu-lines"></span>
                </div>
                <h1 className="text-2xl font-semibold select-none">Mixpresso</h1>
            </div>

            {/* AQUI FICAVA A SIDEBAR */}
        </>
    )
}

export default Menu;