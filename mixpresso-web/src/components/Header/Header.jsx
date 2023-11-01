import Menu from "../Common/Menu/Menu";
import SidebarDefault from "../Sidebar/SidebarDefault";

const Header = () => {
    return (
        <>
            <header className="container mx-auto py-5">
                <div className="flex justify-between">
                    <Menu />
                    <div>sa</div>
                    <div>ds</div>
                </div>
                {/* <SidebarDefault /> */}
            </header >
            <hr />
        </>
    )
};

export default Header;
