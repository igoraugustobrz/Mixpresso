'use client';
import { CSSTransition } from 'react-transition-group';
import { Sidebar } from 'flowbite-react';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
    HiOutlineDocumentReport,
    HiInformationCircle,
    HiArrowSmRight,
    HiShoppingCart,
    HiOutlineHome,
    HiShoppingBag,
    HiTable,
    HiHeart
} from 'react-icons/hi';
import logo from '../../assets/global/logo.png';
import './index.css';

const SidebarDefault = ({ action, startAnimation, nodeRef }) => {

    return (
        <>
            <CSSTransition
                in={startAnimation}
                timeout={300}
                nodeRef={nodeRef}
                classNames={"slide"}
                unmountOnExit
            >
                <div ref={nodeRef} className='absolute top-0 left-0 h-full w-full sm:w-[20rem] z-20 rounded-lg'>
                    <Sidebar className='w-full dark-theme-sidebar'>
                        <div className="flex flex-col items-end p-5">
                            <BsXLg
                                className="text-2xl dark:text-white cursor-pointer"
                                onClick={action}
                            />
                        </div>
                        <Sidebar.Logo
                            img={logo}
                            imgAlt="Mixpresso"
                        >
                            Mixpresso
                        </Sidebar.Logo>

                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Link to='/home'>
                                    <Sidebar.Item icon={HiOutlineHome}>
                                        Home
                                    </Sidebar.Item>
                                </Link>
                                <Sidebar.Item icon={HiShoppingBag}>
                                    Produtos
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiShoppingCart}>
                                    Carrinho
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiHeart}>
                                    Favoritos
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>

                            <Sidebar.ItemGroup>
                                <Sidebar.Item icon={HiOutlineDocumentReport}>
                                    Documentação
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiInformationCircle}>
                                    Sobre
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items >
                    </Sidebar >
                </div >
            </CSSTransition >
        </>
    )
}

export default SidebarDefault;