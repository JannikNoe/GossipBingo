import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import GameHeader from "../../../layout/GameHeaderView";
import api from "../../../../services/api";
import LottieLoader from "../../../base/loader";



// const bingoNumbers = [
//     { field: '1', number: '1', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod', status: true },
//     { field: '2', number: '2', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
//     { field: '3', number: '3', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '4', number: '4', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '5', number: '5', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '6', number: '6', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '7', number: '7', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '8', number: '8', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
//     { field: '9', number: '9', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '10', number: '32', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '11', number: '11', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '12', number: '25', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
//     { field: '13', number: '29', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '14', number: '31', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '15', number: '39', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
//     { field: '16', number: '16', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
// ];


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
            console.log(response.data.gossip)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const loadBingoField = async () => {
        setLoading(true);
        try {
            const gameId = localStorage.getItem('currentGameId');
            const response = await api.get(`http://127.0.0.1:8000/api/bingo-fields/${gameId}/${userId}`);
            console.log(response.data)
            const abc = []
            const datas = {}
            for (let i = 1; i <= 16; i++) {
                datas['field'+i] = response.data['field'+i]
            }
            abc.push(datas)
            setLoadedBingoFields(abc);
            console.log(abc)
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
                    {loading ? ( // Überprüfen, ob geladen wird
                        <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                            <LottieLoader/>
                        </div> // Placeholder-Loader
                    ) : (
                        <div className="grid grid-cols-4 gap-1.5">
                            {/*{gossipData && (*/}
                            {/*    <div className="flex gap-x-1 items-center">*/}
                            {/*        <h6 className="font-semibold pb-1">Status:</h6>*/}
                            {/*        {gossipData.find(gossip => gossip.id === selectedGossip) ? (*/}
                            {/*            <span className="bg-red-300 py-1 px-2 rounded-lg">Offen</span>*/}
                            {/*        ) : (*/}
                            {/*            <span className="bg-green-300 py-1 px-2 rounded-lg">Bingo</span>*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(1);
                                setSelectedGossip(loadedBingoFields[0]?.['field1'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field1}</span>
                                <span className="absolute z-1 top-1 left-1 opacity-20 text-6xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>👍</span>
                            </div>

                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(2)
                                setSelectedGossip(loadedBingoFields[0]?.['field2'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field2}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(3)
                                setSelectedGossip(loadedBingoFields[0]?.['field3'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field3}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(4)
                                setSelectedGossip(loadedBingoFields[0]?.['field4'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field4}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(5)
                                setSelectedGossip(loadedBingoFields[0]?.['field5'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field5}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(6)
                                setSelectedGossip(loadedBingoFields[0]?.['field6'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field6}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(7)
                                setSelectedGossip(loadedBingoFields[0]?.['field7'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field7}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(8)
                                setSelectedGossip(loadedBingoFields[0]?.['field8'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field8}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(9)
                                setSelectedGossip(loadedBingoFields[0]?.['field9'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field9}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(10)
                                setSelectedGossip(loadedBingoFields[0]?.['field10'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field10}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(11)
                                setSelectedGossip(loadedBingoFields[0]?.['field11'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field11}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(12)
                                setSelectedGossip(loadedBingoFields[0]?.['field12'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field12}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(13)
                                setSelectedGossip(loadedBingoFields[0]?.['field13'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field13}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(14)
                                setSelectedGossip(loadedBingoFields[0]?.['field14'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field14}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(15)
                                setSelectedGossip(loadedBingoFields[0]?.['field15']?loadedBingoFields[0]?.['field15']:null);
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field15}</span>
                            </div>
                            <div className="bg-white rounded-lg relative" onClick={() => {
                                handleFieldClick(16)
                                setSelectedGossip(loadedBingoFields[0]?.['field16'])
                            }}>
                                <span className="flex justify-center items-center h-[90px] text-black">{loadedBingoFields[0]?.field16}</span>
                            </div>
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
