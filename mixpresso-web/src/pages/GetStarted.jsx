'use client';
import { Button } from 'flowbite-react';
import homeMobile from '../assets/mobile.png';

const GetStarted = () => {
    return (
        <>
            <div className='relative sm:hidden w-screen h-screen'>
                <div>
                    <img
                        className='w-full h-[90vh]'
                        src={homeMobile}
                        alt="Home"
                    />
                </div>

                <div className='content'>
                    <div className='h-[40vh] bg-black-white'>
                        <div className='content-inner'>
                            <p className='main-text'>Café tão bom, que seu paladar vai amar.</p>

                            <p className='sub-text'>O melhor grão, a torra mais fina, o sabor poderoso</p>

                            <Button
                            size="sm"
                                className='mx-auto px-10'
                                color="warning"
                            >
                                Vamos lá!
                            </Button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};

export default GetStarted;
