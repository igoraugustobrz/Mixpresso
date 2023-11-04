'use client';
import logo from '../../assets/global/logo.png';
import { Footer } from "flowbite-react";

const FooterDefault = () => {
    return (
        <>

            <Footer container className='dark:bg-black'>
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
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            React.js
                                        </Footer.Link>
                                        <Footer.Link
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            Spring Boot
                                        </Footer.Link>
                                        <Footer.Link
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            MySQL
                                        </Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title title="Follow us" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link
                                            href="https://iaugusto.vercel.app/"
                                            target="_blank"
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            Portfólio
                                        </Footer.Link>
                                        <Footer.Link
                                            href="https://www.linkedin.com/in/igorbrz/"
                                            target="_blank"
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            LinkedIn
                                        </Footer.Link>
                                        <Footer.Link
                                            href="https://github.com/igoraugustobrz"
                                            target="_blank"
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
                                        >
                                            Github
                                        </Footer.Link>
                                    </Footer.LinkGroup>
                                </div>
                                <div>
                                    <Footer.Title title="Legal" />
                                    <Footer.LinkGroup col>
                                        <Footer.Link
                                            href="https://github.com/igoraugustobrz/Mixpresso"
                                            target="_blank"
                                            className="hover:text-brown-900 dark:hover:text-brown-900/10"
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
                        </div>
                    </div>
                </div >
            </Footer >

        </>
    )
}

export default FooterDefault;