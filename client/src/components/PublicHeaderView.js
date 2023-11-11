import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <header>
            <div className="hidden md:block max-w-screen-xl m-auto pt-8 ">
                <div className="bg-white rounded-full py-4 px-10 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Gossip Bingo <span className="text-xs font-normal">v1.0.0</span></h2>
                    <div className="flex gap-x-3 text-sm font-semibold">
                        <Link to="/tutorial" className="">Wie funktioniert Gossip Bingo?</Link>
                        <span>|</span>
                        <Link to="impressum" className="">Impressum</Link>
                        <span className="opacity-0">|</span>
                        <a href="https://20north.de/privacy-policy/" target="_blank" className="">Datenschmutz</a>
                        <span>|</span>
                        <Link to="" className="">Log In</Link>
                    </div>
                </div>
            </div>
            <div className="block md:hidden relative pt-20 pb-4">
                <div className="absolute top-6 z-10 flex items-center justify-between gap-x-3 w-full">
                    <div className="">
                        <h2 className="text-white font-semibold text-xl">Gossip Bingo</h2>
                        <span className="text-white text-sm font-normal block -mt-0.5">v.1.0.0</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div className="">
                            <button
                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-DarkGrayPrimary">
                                Log In
                            </button>
                        </div>
                        <div className="bg-white rounded-full  p-2.5 " onClick={toggleMobileNav}>
                            <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.132 14.742">
                                <path id="menu_FILL0_wght400_GRAD0_opsz48" d="M6,25.742V24.024H23.132v1.718ZM6,19.73V18.012H23.132V19.73Zm0-6.012V12H23.132v1.718Z" transform="translate(-5.5 -11.5)" fill="#202020" stroke="#202020" stroke-linejoin="round" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {mobileNavOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-end">
                    <nav className="bg-white w-4/5 h-full">
                        <div className="mt-24 ml-8 flex flex-wrap gap-y-4 gap-x-96">
                            <Link to="/" className="relative group">
                                <span className="relative z-[99] font-semibold text-2xl">Startseite</span>
                                <span className="absolute inset-x-0 bottom-0.5 h-2 w-20 rounded-lg bg-yellow-300/60 z-[10]"></span>
                            </Link>
                            <Link to="/" className="relative group">
                                <span className="relative z-[99] font-semibold text-xl">Spieleanleitung</span>
                                {/*<span className="absolute inset-x-0 bottom-0.5 h-2 w-40 rounded-lg bg-yellow-300/60 z-[10]"></span>*/}
                            </Link>
                            <Link to="/" className="relative group">
                                <span className="relative z-[99] font-semibold text-xl">Über uns</span>
                                {/*<span className="absolute inset-x-0 bottom-0.5 h-2 w-40 rounded-lg bg-yellow-300/60 z-[10]"></span>*/}
                            </Link>
                        </div>
                        <div className="ml-8 mt-4">
                            <hr className="h-[10px] w-4/5 color-black" />
                            <div className="flex gap-x-2 opacity-50">
                                <Link to="/" className="relative group">
                                    <span className="relative z-[99] font-normal text-sm">Impressum</span>
                                </Link>
                                <span>|</span>
                                <Link to="/" className="relative group">
                                    <span className="relative z-[99] font-normal text-sm">Datenschutz</span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default PublicHeader;
