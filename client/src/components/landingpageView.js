import React from 'react';
import PublicHeader from "./publicHeaderView";

const LandingPage = () => {
    return (
        <div className="landing-page bg-bgDarkGrayPrimary w-full max-h-screen overflow-hidden">
            <PublicHeader />
            <main className="">
                <div className="hidden md:block max-w-screen-xl m-auto">
                    <div className="">
                        <div className="grid grid-cols-2 h-screen mt-10">
                            <div className="col-span-1 relative h-[80%] pt-12">
                                <h1 className="text-6xl font-medium text-white uppercase leading-tight">Expect the<br /><span className="text-yellow-400">unexpected</span>,<br/>mark <span className="text-yellow-400">the moment</span></h1>
                                <div className="absolute bottom-0">
                                    <p className="text-white leading-loose w-[64%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                    <div className="mt-4">
                                        <button
                                            className="uppercase w-[64%] rounded-xl bg-white px-3 py-3 text-md font-semibold text-DarkGrayPrimary shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition">
                                            Jetzt mitmachen 🎉
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 bg-white w-full rounded-[40px] h-[80%] relative">
                                <div className="w-full">
                                    <img src="/client/public/images/gossipBingoMockup.png" alt="" className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden">

                </div>
            </main>
        </div>
    );
};

export default LandingPage;
