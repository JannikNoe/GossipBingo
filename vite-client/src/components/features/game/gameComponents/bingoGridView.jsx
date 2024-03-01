import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import GameHeader from "../../../layout/GameHeaderView.jsx";
import api from "../../../../services/api.jsx";
import LottieLoader from "../../../base/loader.jsx";


const BingoGridView = () => {

    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/login')
        }
        loadGossipData();
        loadBingoField();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedGossip, setSelectedGossip] = useState(null);
    const [gossipData, setGossipData] = useState([]);
    const [loadedBingoFields, setLoadedBingoFields] = useState([]);
    const [gameId, setGameId] = useState(null);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const [loading, setLoading] = useState(false);


    const loadGossipData = async () => {
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await api.get(`http://127.0.0.1:8000/api/gossip/${gameId}/0`); // Fetching gossip with status 0
            setGossipData(response.data.gossip);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const loadBingoField = async () => {
        setLoading(true);
        try {
            const gameId = localStorage.getItem('currentGameId');
            const response = await api.get(`http://127.0.0.1:8000/api/bingo-fields/${gameId}/${userId}`);
            const abc = []
            const datas = {}
            for (let i = 1; i <= 16; i++) {
                datas['field'+i] = response.data['field'+i]
            }
            abc.push(datas)
            setLoadedBingoFields(abc);
        } catch (error) {
            console.error('Error loading bingo field:', error);
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };

    const handleFieldClick = (number) => {
        setSelectedNumber(number);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNumber(null);
    };

    const Modal = ({ isOpen, number, onClose }) => {
        if (!isOpen || !number) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-3xl w-[80%] relative">
                    <div className="absolute right-3 top-3" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                    {/*<h2 className="text-xl font-bold">Gossip auswählen</h2>*/}
                    <div>

                    </div>
                    <p className="mt-2"><span className="font-semibold">Auswahl:</span><br/>
                        {gossipData.find(({id})=> id === selectedGossip)?.title}
                    </p>
                    <hr className="my-3" />
                    <p className="mt-1">Bingo-Nummer: {selectedGossip}
                    </p>
                    {gossipData && (
                        <div className="flex gap-x-1 items-center">
                            <h6 className="font-semibold pb-1">Status:</h6>
                            {gossipData.find(gossip => gossip.id === selectedGossip) ? (
                                <span className="bg-red-300 py-1 px-2 rounded-lg">Offen</span>
                            ) : (
                                <span className="bg-green-300 py-1 px-2 rounded-lg">Bingo</span>
                            )}
                        </div>
                    )}
                    <button
                        onClick={()=>{onClose()}}
                        className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm mt-4">
                        Schließen
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-bgGamePrimary h-screen">
            <GameHeader />
            <div className="max-w-xl m-auto px-6 pb-14">
                <h3 className="uppercase text-4xl font-semibold text-white pt-8">Dein Bingofeld</h3>
                <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                    {loading ? (
                        <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                            <LottieLoader />
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-1.5">
                            {Array.from({ length: 16 }, (_, index) => {
                                const fieldName = `field${index + 1}`;
                                return (
                                    <div key={index} className="bg-white rounded-lg relative" onClick={() => {
                                        handleFieldClick(index + 1);
                                        setSelectedGossip(loadedBingoFields[0]?.[fieldName]);
                                    }}>
                                        <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.[fieldName]}</span>
                                        <span className="absolute z-1 top-1 left-1 opacity-20 text-6xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                            {gossipData.find(gossip => gossip.id === loadedBingoFields[0]?.[fieldName]) ? '' : '👍'}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                number={selectedNumber}
                onClose={closeModal}
            />
        </div>
    );
};

export default BingoGridView;
