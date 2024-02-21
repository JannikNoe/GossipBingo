import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GameHeader from "../../../layout/GameHeaderView";



const bingoNumbers = [
    { field: '1', number: '1', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod', status: true },
    { field: '2', number: '2', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
    { field: '3', number: '3', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '4', number: '4', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '5', number: '5', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '6', number: '6', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '7', number: '7', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '8', number: '8', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
    { field: '9', number: '9', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '10', number: '32', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '11', number: '11', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '12', number: '25', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: true },
    { field: '13', number: '29', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '14', number: '31', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '15', number: '39', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
    { field: '16', number: '16', gossip:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',status: false },
];


const BingoGridView = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [gossipData, setGossipData] = useState([]);
    const [gameId, setGameId] = useState(null);

    useEffect(() => {
        getLatestGameId();
        loadGossipData();
    }, []);

    const loadGossipData = async () => {
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await axios.get(`http://127.0.0.1:8000/api/gossip/${gameId}/0`); // Fetching gossip with status 0
            setGossipData(response.data.gossip);
            console.log(response.data.gossip)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getLatestGameId = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/games/latest');
            if (response.data.game) {
                setGameId(response.data.game.id);
            }
        } catch (error) {
            console.error('Error:', error);
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
                <div className="bg-white p-6 rounded-3xl w-[80%]">
                    <h2 className="text-xl font-bold">Gossip hinterlegen</h2>
                    <p className="my-3">{number.gossip}</p>
                    <hr className="my-3" />
                    <p>Status:<span className={number.status? "ml-2 bg-green-500 py-0.5 px-2 rounded-md text-white text-sm" : "ml-2 bg-red-500 py-0.5 px-2 rounded-md text-white text-sm"}>{number.status ? "Bereits geschehen" : "Noch nicht geschehen"}</span></p>
                    <p className="mt-1">Bingo-Nummer: {number.number}</p>
                    <button
                        onClick={onClose}
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
                <h3 className="uppercase text-4xl font-semibold text-white pt-8">Befülle dein Bingofeld</h3>
                <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                    <div className="grid grid-cols-4 gap-1.5">
                        {bingoNumbers.map(Numbers => (
                            <div className={Numbers.status? "bg-white rounded-lg relative border-2 border-black/60" : "bg-white rounded-lg relative"}
                                 onClick={() => handleFieldClick(Numbers)}
                            >
                                <span className="flex justify-center items-center h-[90px] text-black">{Numbers.number}</span>
                                <span className={Numbers.status? "absolute text-5xl opacity-20" :"hidden"} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>👍</span>
                            </div>
                        ))}
                    </div>
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
