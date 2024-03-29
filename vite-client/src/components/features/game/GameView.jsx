import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import api from "../../../services/api.jsx";
import GameHeader from "../../layout/GameHeaderView.jsx";
import WaitingGif from '../../../images/gifs/giphy-waiting.gif';
import UncheckedScenariosAccordion from "./gameComponents/UncheckedScenariosAccordionView.jsx";
import CheckedScenariosAccordion from "./gameComponents/CheckedScenariosAccordionView.jsx";
import LottieLoader from "../../base/loader.jsx";


const GameView = () => {

    // definierter Zustand für den Start des Spiels
    const [gameStarted, setGameStarted] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang

    useEffect(() => {
        checkIfGameStarted()
        if (!localStorage.getItem('token')){
            navigate('/login')
        }

    }, []);



    const checkIfGameStarted = async () => {
        setLoading(true); // Ladezustand setzen
        try {
            const response = await api.get('http://127.0.0.1:8000/api/games/latest');
            localStorage.setItem('currentGameId', response.data.game.id)
            setGameStarted(response.data.game ? response.data.game.status : 0);
            return true; // Spiel ist gestartet, wenn der Status nicht 0 ist
        } catch (error) {
            console.error('Fehler beim Abrufen des Spielstatus', error);
            return false; // Bei einem Fehler wird das Spiel als nicht gestartet betrachtet
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };



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
        <div className="bg-bgGamePrimary h-full">
            <div className="bg-bgGamePrimary h-screen w-full">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 bg-bgGamePrimary md:pt-10">
                    <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8 md:mt-0">
                        <h3 className="uppercase text-4xl font-semibold">Gossip Bingo</h3>
                        <span className="text-sm block pt-1.5">Ilmenaugarten Edition</span>

                        {loading ? ( // Überprüfen, ob geladen wird
                            <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                                <LottieLoader/>
                            </div> // Placeholder-Loader
                        ) : (
                            gameStarted ? (
                                <div className="">
                                    <div className="grid grid-cols-2 text-center mt-8 gap-x-2">
                                        <Link to="/gossiptracker">
                                            <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold text-white shadow-sm">
                                                <h6 className="uppercase font-normal text-sm pb-0.5">Gossip</h6>
                                                <h4 className="uppercase font-medium text-xl">Tracker</h4>
                                            </div>
                                        </Link>
                                        <Link to="/gamegrid">
                                            <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold text-white shadow-sm">
                                                <h6 className="uppercase font-normal text-sm pb-0.5">Bingofeld</h6>
                                                <h4 className="uppercase font-medium text-xl">öffnen</h4>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className=" mt-3">
                                        <div className="flex justify-center mb-6 bg-bgDarkGrayPrimary rounded-full p-1 relative">
                                            <div
                                                className={`flex-1 px-4 py-2 rounded-full uppercase text-sm text-center flex items-center ${activeTab === 'openRequests' ? 'bg-bgGrayPrimary text-bgGrayPrimary' : 'bg-bgDarkGrayPrimary text-white'}`}
                                                onClick={() => setActiveTab('openRequests')}>
                                                <span>Offener Gossip</span>
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
                                        <div className="">
                                            {/* Bedingtes Rendering basierend auf dem Wert von activeTab */}
                                            {activeTab === 'openRequests' && (
                                                <div
                                                    className="transition-all duration-500 opacity-100">
                                                    <UncheckedScenariosAccordion />
                                                </div>
                                            )}

                                            {activeTab === 'pastGossip' && (
                                                <div
                                                    className="transition-all duration-500 opacity-100">
                                                    <CheckedScenariosAccordion />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ):(
                                // Spiel nicht gestartet Screen
                                <div className="">
                                    <div className="grid grid-cols-2 gap-x-3 mt-4">
                                        <Link to="/addgossip" className="bg-bgDarkGrayPrimary rounded-3xl flex justify-center items-center">
                                            <div className="uppercase text-center px-3 py-7 text-md font-semibold text-white">
                                                <h6 className="uppercase font-normal text-sm pb-0.5">Möglichen Gossip</h6>
                                                <h4 className="uppercase font-medium text-xl">Eintragen</h4>
                                            </div>
                                        </Link>
                                        <Link to="/editBingoGrid" className="bg-bgDarkGrayPrimary rounded-3xl flex justify-center items-center">
                                            <div className="uppercase text-center px-3 py-7 text-md font-semibold text-white">
                                                <h6 className="uppercase font-normal text-sm pb-0.5">Befülle dein</h6>
                                                <h4 className="uppercase font-medium text-xl">Bingofeld</h4>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="pt-4">
                                        <div className="rounded-lg">
                                            <img src={WaitingGif} alt="Eine wartende Person" className="rounded-xl"/>
                                        </div>
                                        <h5 className="text-sm text-center pt-4">Das Spiel beginnt in Kürze 🎉</h5>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className="">
                        <Link to="/gameOverview">
                            <button className="bg-bgDarkGrayPrimary text-white w-full py-3 rounded-2xl uppercase text-xl mt-3">
                                Zurück zum Start
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameView;
