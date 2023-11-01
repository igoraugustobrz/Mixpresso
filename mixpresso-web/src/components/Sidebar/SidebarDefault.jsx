'use client';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import logo from '../../assets/global/logo.png';
import { BsXLg } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';
import './SlidebarDefault.css';

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
                <div ref={nodeRef} className="absolute top-0 left-0 bg-red-100 h-full md:w-[20rem] z-20 rounded-lg">
                    <ul className="flex flex-col items-center p-5">
                        <li className="flex justify-end w-full">
                            <BsXLg className="text-2xl cursor-pointer" onClick={action} />
                        </li>
                        <Sidebar>
                            <Sidebar.Logo href="#" img={logo} imgAlt="Mixpresso">
                                Mixpresso
                            </Sidebar.Logo>
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Item icon={HiChartPie}>
                                        Dashboard
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiViewBoards}>
                                        Kanban
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiInbox}>
                                        Inbox
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiUser}>
                                        Users
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiShoppingBag}>
                                        Products
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiArrowSmRight}>
                                        Sign In
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiTable}>
                                        Sign Up
                                    </Sidebar.Item>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </ul>
                </div>
            </CSSTransition>
        </>
    )
}

export default SidebarDefault;