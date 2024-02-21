import React from 'react';
import PublicHeader from "../layout/PublicHeaderView";
import mockupImg from './../../images/gossipBingoMockup.png';
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landing-page bg-white md:bg-bgDarkGrayPrimary md:w-full md:max-h-screen md:overflow-hidden md:px-6 relative h-screen">
            <div className="px-6 md:px-0 bg-bgDarkGrayPrimary relative z-[99] rounded-b-3xl">
                <PublicHeader />
            </div>

            {/*Desktop View*/}
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
                        <div className="col-span-1 bg-white w-full rounded-[40px] h-[80%] relative overflow-hidden">
                            <div className="w-full flex justify-center items-end h-full relative">
                                <img src={mockupImg} alt="" className="w-[360px] h-auto relative z-[10]"/>
                                <p className="absolute bottom-[-40px] z-[1] font-semibold uppercase opacity-20 text-2xl text-justify">
                                    Lena kommt mit einem unerwarteten Gast. Tom tanzt auf dem Wohnzimmertisch. Sophie singt lautstark Karaoke und trifft keinen Ton. Janina und Marcel haben einen heimlichen Flirt in der Küche. Timo schläft auf dem Sofa ein, noch bevor Mitternacht schlägt. Clara versteckt die Getränke, weil sie denkt, alle sind schon zu betrunken. David startet eine spontane Limbo-Runde im Flur. Mia weigert sich, ihre teuren Schuhe auszuziehen. Lukas erzählt allen die peinliche Geschichte von der letzten Party. Sarah versucht, eine Vase zu kleben, die sie versehentlich umgestoßen hat. Max spielt den DJ, obwohl niemand nach seiner Musik gefragt hat. Jana und Leon verschwinden plötzlich und keiner weiß wohin. Stefan macht heimliche Fotos von den Gästen für seine Social-Media-Story. Lara bestellt heimlich Pizza, obwohl es genug Essen gibt. Eric und Anna starten einen improvisierten Tanzwettbewerb. Laura kichert im Badezimmer – und keiner traut sich hinein. Ben schlägt vor, ein Trinkspiel zu beginnen, bei dem keiner die Regeln kennt. Jessica verliert ständig ihre Handtasche und sucht sie panisch. Jonas gibt vor, Barkeeper zu sein und mixt die verrücktesten Cocktails. Lisa und Marc werden beim heimlichen Küssen auf dem Balkon erwischt. Lena kommt mit einem unerwarteten Gast. Tom tanzt auf dem Wohnzimmertisch. Sophie singt lautstark Karaoke und trifft keinen Ton. Janina und Marcel haben einen heimlichen Flirt in der Küche. Timo schläft auf dem Sofa ein, noch bevor Mitternacht schlägt. Clara versteckt die Getränke, weil sie denkt, alle sind schon zu betrunken. David startet eine spontane Limbo-Runde im Flur. Mia weigert sich, ihre teuren Schuhe auszuziehen. Lukas erzählt allen die peinliche Geschichte von der letzten Party. Sarah versucht, eine Vase zu kleben, die sie versehentlich umgestoßen hat. Max spielt den DJ, obwohl niemand nach seiner Musik gefragt hat. Jana und Leon verschwinden plötzlich und keiner weiß wohin. Stefan macht heimliche Fotos von den Gästen für seine Social-Media-Story. Lara bestellt heimlich Pizza, obwohl es genug Essen gibt. Eric und Anna starten einen improvisierten Tanzwettbewerb. Laura kichert im Badezimmer – und keiner traut sich hinein. Ben schlägt vor, ein Trinkspiel zu beginnen, bei dem keiner die Regeln kennt. Jessica verliert ständig ihre Handtasche und sucht sie panisch. Jonas gibt vor, Barkeeper zu sein und mixt die verrücktesten Cocktails. Lisa und Marc werden beim heimlichen Küssen auf dem Balkon erwischt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Mobile View*/}
            <div className="block md:hidden absolute bottom-0">
                <div className="relative z-0">
                    <div className="w-full flex justify-center items-end h-full relative">
                        <img src={mockupImg} alt="" className="w-[220px] h-auto relative z-[10]"/>
                        <p className="absolute bottom-[-210px] z-[1] font-semibold uppercase opacity-20 text-2xl text-justify">
                            Lena kommt mit einem unerwarteten Gast. Tom tanzt auf dem Wohnzimmertisch. Sophie singt lautstark Karaoke und trifft keinen Ton. Janina und Marcel haben einen heimlichen Flirt in der Küche. Timo schläft auf dem Sofa ein, noch bevor Mitternacht schlägt. Clara versteckt die Getränke, weil sie denkt, alle sind schon zu betrunken. David startet eine spontane Limbo-Runde im Flur. Mia weigert sich, ihre teuren Schuhe auszuziehen. Lukas erzählt allen die peinliche Geschichte von der letzten Party. Sarah versucht, eine Vase zu kleben, die sie versehentlich umgestoßen hat. Max spielt den DJ, obwohl niemand nach seiner Musik gefragt hat. Jana und Leon verschwinden plötzlich und keiner weiß wohin. Stefan macht heimliche Fotos von den Gästen für seine Social-Media-Story. Lara bestellt heimlich Pizza, obwohl es genug Essen gibt. Eric und Anna starten einen improvisierten Tanzwettbewerb. Laura kichert im Badezimmer – und keiner traut sich hinein. Ben schlägt vor, ein Trinkspiel zu beginnen, bei dem keiner die Regeln kennt. Jessica verliert ständig ihre Handtasche und sucht sie panisch. Jonas gibt vor, Barkeeper zu sein und mixt die verrücktesten Cocktails. Lisa und Marc werden beim heimlichen Küssen auf dem Balkon erwischt. Lena kommt mit einem unerwarteten Gast. Tom tanzt auf dem Wohnzimmertisch. Sophie singt lautstark Karaoke und trifft keinen Ton. Janina und Marcel haben einen heimlichen Flirt in der Küche. Timo schläft auf dem Sofa ein, noch bevor Mitternacht schlägt. Clara versteckt die Getränke, weil sie denkt, alle sind schon zu betrunken. David startet eine spontane Limbo-Runde im Flur. Mia weigert sich, ihre teuren Schuhe auszuziehen. Lukas erzählt allen die peinliche Geschichte von der letzten Party. Sarah versucht, eine Vase zu kleben, die sie versehentlich umgestoßen hat. Max spielt den DJ, obwohl niemand nach seiner Musik gefragt hat. Jana und Leon verschwinden plötzlich und keiner weiß wohin. Stefan macht heimliche Fotos von den Gästen für seine Social-Media-Story. Lara bestellt heimlich Pizza, obwohl es genug Essen gibt. Eric und Anna starten einen improvisierten Tanzwettbewerb. Laura kichert im Badezimmer – und keiner traut sich hinein. Ben schlägt vor, ein Trinkspiel zu beginnen, bei dem keiner die Regeln kennt. Jessica verliert ständig ihre Handtasche und sucht sie panisch. Jonas gibt vor, Barkeeper zu sein und mixt die verrücktesten Cocktails. Lisa und Marc werden beim heimlichen Küssen auf dem Balkon erwischt.
                        </p>
                    </div>
                </div>
                <div className="bg-bgDarkGrayPrimary rounded-t-3xl px-6 pt-10 pb-8 relative z-10">
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
