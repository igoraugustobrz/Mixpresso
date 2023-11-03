import banner from '../../assets/global/desktop.jpg'

const Banner = () => {
    return (
        <>

            <div className="container mx-auto my-10 h-[100px] sm:h-[150px] lg:h-[200px]">
                <img
                    className='object-cover w-full h-full rounded-lg'
                    src={banner}
                    alt="Banner"
                />
            </div>
        </>
    )
}

export default Banner;