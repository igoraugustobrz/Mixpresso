'use client';
import { Button } from 'flowbite-react';
import homeMobile from '../assets/global/mobile.png';
import homeDesktop from '../assets/global/desktop.jpg';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <>
            <div className='relative w-full h-screen sm:h-full'>
                <div className='block sm:hidden'>
                    <img
                        className='w-full h-[90vh]'
                        src={homeMobile}
                        alt="Home"
                    />
                </div>

                <div className='hidden sm:block'>
                    <img
                        className='w-full h-[90vh]'
                        src={homeDesktop}
                        alt='Home'
                    />
                </div>

            </div>

            <div className='content'>
                <div className='h-[40vh] bg-black-white'>
                    <div className='content-inner'>
                        <p className='main-text'>Café tão bom, que seu paladar vai amar.</p>

                        <p className='sub-text'>O melhor grão, a torra mais fina, o sabor poderoso</p>

                        <Link
                            to='/home'
                        >
                            <Button
                                size="sm"
                                className='mx-auto px-10 sm:px-20 sm:text-9xl sm:py-2'
                                color='warning'
                            >
                                Vamos lá!
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default GetStarted;
