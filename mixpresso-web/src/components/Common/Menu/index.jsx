const Menu = ({ action }) => {

    return (
        <>

            <div className="flex items-center gap-x-3 cursor-pointer" onClick={action}>
                <div className="flex flex-col gap-y-0.5">
                    <span className="w-[18px] border-black dark:border-white border-[1.5px] rounded-full"></span>
                    <span className="w-[14px] border-black dark:border-white border-[1.5px] rounded-full"></span>
                    <span className="w-[18px] border-black dark:border-white border-[1.5px] rounded-full"></span>
                    <span className="w-[14px] border-black dark:border-white border-[1.5px] rounded-full"></span>
                </div>
                <h1 className="text-2xl dark:text-white font-semibold select-none">Mixpresso</h1>
            </div>

        </>
    )
}

export default Menu;