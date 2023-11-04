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

            <div className='absolute -bottom-0 left-0 w-screen z-10'>
                <div className='h-[40vh] bg-black-white'>
                    <div className='flex flex-col justify-center h-full'>
                        <p className='text-get-started'>Café tão bom, que seu paladar vai amar.</p>

                        <p className='sub-text-get-started'>O melhor grão, a torra mais fina, o sabor poderoso</p>

                        <Link
                            to='/home'
                        >
                            <Button
                                size="sm"
                                className='mx-auto px-10 sm:px-20 sm:py-2'
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
