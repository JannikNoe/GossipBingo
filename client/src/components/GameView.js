import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import GameHeader from "./GameHeaderView";

const requirementList = [
    { id: 1, text: 'Alkohol steht bereit' },
    { id: 2, text: 'Geile Menschen sind am Start' },
    { id: 3, text: 'Bereit für einen geilen Abend' },
];

const GameView = () => {
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'

    const [isPastGossipExpanded, setIsPastGossipExpanded] = useState(false);
    const togglePastGossipDetails = () => {
        setIsPastGossipExpanded(!isPastGossipExpanded);
    }

    const [isOpenRequests, setIsOpenRequests] = useState(false);
    const toggleOpenRequests = () => {
        setIsOpenRequests(!isOpenRequests);
    }


    return (
        <div className="bg-bgGamePrimary h-screen">
            <GameHeader />
            <div className="max-w-xl m-auto px-6 pb-14">
                <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                    <h3 className="uppercase text-4xl font-semibold">Gossip Bingo</h3>
                    <span className="text-sm block pt-1.5">Ilmenaugarten Edition</span>
                    <div className="grid grid-cols-2 text-center mt-8 gap-x-2">
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold text-white shadow-sm">
                            <h6 className="uppercase font-normal text-sm pb-0.5">Gossip</h6>
                            <h4 className="uppercase font-medium text-xl">Tracker</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold text-white shadow-sm">
                            <h6 className="uppercase font-normal text-sm pb-0.5">Bingofeld</h6>
                            <h4 className="uppercase font-medium text-xl">öffnen</h4>
                        </div>
                    </div>

                    <div className=" mt-3">
                        <div className="flex justify-center mb-6 bg-bgDarkGrayPrimary rounded-full p-1 relative">
                            <div
                                className={`flex-1 px-4 py-2 rounded-full uppercase text-sm text-center ${activeTab === 'openRequests' ? 'bg-bgGrayPrimary text-bgGrayPrimary' : 'bg-bgDarkGrayPrimary text-white'}`}
                                onClick={() => setActiveTab('openRequests')}>
                                <span>Offene Anfragen</span>
                                {/*<div className="w-[18px] h-[18px] bg-bgDarkGrayPrimary text-white rounded-full absolute flex justify-center items-center top-[30%] left-[38%]">*/}
                                {/*    <span className="text-[10px]">4</span>*/}
                                {/*</div>*/}
                            </div>
                            <div
                                className={`flex-1 px-4 py-2 rounded-full uppercase text-sm text-center ${activeTab === 'pastGossip' ? 'bg-bgGrayPrimary text-DarkGrayPrimary' : 'bg-bgDarkGrayPrimary text-white'}`}
                                onClick={() => setActiveTab('pastGossip')}
                            >
                                Geschehener Gossip
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ${activeTab === 'openRequests' ? 'opacity-100' : 'opacity-0'}`}>
                            {activeTab === 'openRequests' &&
                                <div onClick={toggleOpenRequests}>
                                    {!isOpenRequests ? (
                                        <>
                                            <div className="flex gap-x-3 bg-white py-3 px-5 rounded-full items-center">
                                                <span className="font-semibold text-lg">12</span>
                                                <p className="text-sm line-clamp-2">Jannik wirf ein Teil und möchte kuscheln kuscheln kuscheln kuscheln</p>
                                            </div>
                                            <p className="text-xs text-center opacity-70">Aktuell gibt es keinen Gossip zum abhaken... <br />Verbreite etwas Gossip, damit es spannender wird 😉</p>
                                        </>
                                    ) : (
                                        <div className="">
                                            <div className="flex gap-x-3 bg-white py-3 px-5 rounded-full items-center">
                                                <span className="font-semibold text-lg">12</span>
                                                <p className="text-sm line-clamp-2">Jannik wirf ein Teil und möchte kuscheln kuscheln kuscheln kuscheln</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>
                        <div
                            className={`transition-all duration-500 ${activeTab === 'pastGossip' ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {/*// Geschehener Gossip Textabschnitt*/}
                            <div className="bg-white py-3 px-5 rounded-3xl ">
                                <div className="flex gap-x-3 items-center relative mt-2">
                                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                        <g id="Gruppe_44" data-name="Gruppe 44" transform="translate(-52 -449)">
                                            <circle id="Ellipse_22" data-name="Ellipse 22" cx="11" cy="11" r="11" transform="translate(52 449)"/>
                                            <path id="done_FILL0_wght400_GRAD0_opsz48" d="M157.093,346.49,154,343.4l.594-.594,2.5,2.5,5.3-5.3.594.594Z" transform="translate(-95.495 116.755)" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="1"/>
                                        </g>
                                    </svg>
                                    <div className="bg-black rounded-full py-1 px-3">
                                        <p className="text-white text-[11px]">19.11.23 - 03:03 Uhr</p>
                                    </div>
                                </div>
                                <p className="text-sm pt-4">Jannik wirf ein Teil und möchte kuscheln kuscheln kuscheln kuscheln</p>
                                <h6 className="text-sm pt-2">Bestätigt von</h6>
                                <div className="flex mt-1">
                                    <img src="" alt="" className="bg-black w-[30px] h-[30px] rounded-full border-white border-1" />
                                    <div className="bg-black w-[30px] h-[30px] rounded-full border-white border-1 text-white text-xs font-semibold flex justify-center items-center">
                                        <span className="block ">+4</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default GameView;
