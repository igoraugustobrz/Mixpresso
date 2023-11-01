'use client';

import logo from '../../assets/global/logo.png';
import { Footer } from "flowbite-react";
import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const FooterDefault = () => {
    return (
        <>

            <Footer container>
                <div className="container mx-auto">
                    <div className="w-full">
                        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                            <Footer.Brand
                                href="/home"
                                src={logo}
                                alt="Mixpresso Logo"
                                name="Mixpresso"
                            />
                            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                                <div>
                                    <Footer.Title title="Developed" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            React.js
                                        </Footer.Link>
                                        <Footer.Link
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            Spring Boot
                                        </Footer.Link>
                                        <Footer.Link
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            MySQL
                                        </Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title title="Follow us" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link
                                            href="https://github.com/igoraugustobrz"
                                            target="_blank"
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            Github
                                        </Footer.Link>
                                        <Footer.Link
                                            href="https://iaugusto.vercel.app/"
                                            target="_blank"
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            Portfólio
                                        </Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title title="Legal" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link
                                            href="https://github.com/igoraugustobrz/Mixpresso"
                                            target="_blank"
                                            className="hover:text-yellow-500 dark:hover:text-yellow-500"
                                        >
                                            Terms & Conditions
                                        </Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                            </div>
                        </div>
                        <Footer.Divider />
                        <div className="w-full sm:flex sm:items-center sm:justify-between">
                            <Footer.Copyright
                                by="Mixpresso"
                                href="/home"
                                year={2023}

                            />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon
                                    href="https://www.linkedin.com/in/igorbrz/"
                                    target="_blank"
                                    icon={BsLinkedin}
                                />
                                <Footer.Icon
                                    href="https://www.instagram.com/iaugusto__/"
                                    target="_blank"
                                    icon={BsInstagram}
                                />
                            </div>
                        </div>
                    </div>
                </div >
            </Footer >

        </>
    )
}

export default FooterDefault;