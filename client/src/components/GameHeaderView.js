import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GameHeader = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <header>

            <div className="block md:hidden relative pt-20 z-[99]">
                <div className="absolute top-6 z-10 flex items-center justify-between w-full px-6 ">
                    <div className="bg-white rounded-full p-2.5">
                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.173 15.83">
                            <path id="arrow-left-long" d="M.286,102.9a1.139,1.139,0,0,0,0,1.615L6.766,111a1.142,1.142,0,1,0,1.615-1.615l-4.526-4.526H18.229c.634,0,1.394-.469,1.394-1.1a1.419,1.419,0,0,0-1.394-1.189H3.855l4.526-4.527a1.142,1.142,0,0,0-1.615-1.615Z" transform="translate(0.3 -95.753)" stroke="#000" stroke-width="0.5"/>
                        </svg>
                    </div>
                    <div className="bg-white rounded-full p-2.5" onClick={toggleMobileNav}>
                        <svg className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.132 14.742">
                            <path id="menu_FILL0_wght400_GRAD0_opsz48" d="M6,25.742V24.024H23.132v1.718ZM6,19.73V18.012H23.132V19.73Zm0-6.012V12H23.132v1.718Z" transform="translate(-5.5 -11.5)" fill="#202020" stroke="#202020" stroke-linejoin="round" stroke-width="1"/>
                        </svg>
                    </div>
                </div>
            </div>
            {mobileNavOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-end z-[98]">
                    <nav className="bg-gray-900 w-4/5 h-full">
                        <div className="mt-24 ml-8 flex flex-wrap gap-y-4 gap-x-96 text-white">
                            <Link to="/" className="relative group">
                                <span className="relative z-[99] font-semibold text-2xl">Startseite</span>
                                {/*<span className="absolute inset-x-0 bottom-0.5 h-2 w-20 rounded-lg bg-yellow-300/60 z-[10]"></span>*/}
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
                            <hr className="h-[10px] w-4/5 text-white" />
                            <div className="flex gap-x-2 opacity-50 text-white">
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

export default GameHeader;
