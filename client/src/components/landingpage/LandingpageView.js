import React from 'react';
import PublicHeader from "../layout/PublicHeaderView";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing-page bg-white md:bg-bgDarkGrayPrimary md:w-full md:max-h-screen md:overflow-hidden md:px-6 relative h-screen">
            <div className="px-6 md:px-0">
                <PublicHeader />
            </div>

            <div className="hidden md:block max-w-screen-xl m-auto">
                <div className="">
                    <div className="grid grid-cols-2 h-screen mt-10">
                        <div className="col-span-1 relative h-[80%] pt-12">
                            <h1 className="text-6xl font-medium text-white uppercase leading-tight">Expect the<br /><span className="text-yellow-400">unexpected</span>,<br/>mark <span className="text-yellow-400">the moment</span></h1>
                            <div className="absolute bottom-0">
                                <p className="text-white leading-loose w-[64%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                <div className="mt-4">
                                    <Link to="/start">
                                        <button
                                            className="uppercase w-[64%] rounded-xl bg-white px-3 py-3 text-md font-semibold text-DarkGrayPrimary shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition">
                                            Jetzt mitmachen 🎉
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 bg-white w-full rounded-[40px] h-[80%] relative">
                            <div className="w-full">
                                <img src="client/src/images/gossipBingoMockup.png" alt="" className="w-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block md:hidden absolute bottom-0">
                <div className="bg-bgDarkGrayPrimary rounded-t-3xl px-6 pt-10 pb-8">
                    <h2 className="uppercase text-white text-3xl font-semibold">Expect the
                        <span className="text-yellow-400"> unexpected</span>,<br />
                        mark <span className="text-yellow-400">the moment</span></h2>
                    <p className="text-white leading-loose py-4 text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    <div className="mt-2">
                        <Link to="/start">
                            <button
                                className="uppercase w-full rounded-xl bg-white px-3 py-3 text-md font-semibold text-DarkGrayPrimary shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition">
                                Jetzt mitmachen 🎉
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-x-2 text-white justify-center text-xs opacity-50 mt-5">
                        <Link to="/start"><span>Impressum</span></Link>
                        <span>|</span>
                        <Link to="/start"><span>Datenschmutz</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
