import React, {useState, useEffect} from 'react';
import GameHeader from "../../../layout/GameHeaderView.jsx";
import TrackingGifs from "./trackingGifs.jsx";
import { Link, useNavigate} from "react-router-dom";
import api from "../../../../services/api.jsx";
import LottieLoader from "../../../base/loader.jsx";

const openRequests = [
    { id: null , text: '' },
];

const GossipTrackerView = () => {

    const navigate = useNavigate();
    const [gossipData, setGossipData] = useState([]);
    const [expandedBoxes, setExpandedBoxes] = useState({});
    const [gameId, setGameId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang

    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/login')
        }
        loadGossipData();
        getLatestGameId();
    }, []);



    const loadGossipData = async () => {
        setLoading(true); // Ladezustand setzen
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await api.get(`http://127.0.0.1:8000/api/gossip/${gameId}/0`); // Fetching gossip with status 0
            setGossipData(response.data.gossip);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };

    const getLatestGameId = async () => {
        try {
            const response = await api.get('http://127.0.0.1:8000/api/games/latest');
            if (response.data.game) {
                setGameId(response.data.game.id);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleBox = (id) => {
        setExpandedBoxes(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleConfirmButtonClick = async (id) => {
        try {
            await api.put(`http://127.0.0.1:8000/api/gossip/${id}/status/1`);
            // Update the gossip status in the frontend
            setGossipData(prevState =>
                prevState.map(gossip =>
                    gossip.id === id ? { ...gossip, status: 1 } : gossip
                )
            );
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error:', error.response);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNumber(null);
    };

    const Modal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-3xl w-[80%]">
                    <TrackingGifs></TrackingGifs>
                    <h3 className="text-center text-5xl font-semibold pt-4">DONE</h3>
                    <p className="text-center text-lg pt-1">Dein Gossip wurde in die Welt getragen.</p>
                    <Link to="/gameview">
                        <button
                            onClick={onClose}
                            className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm mt-4">
                            Schließen
                        </button>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="bg-bgGamePrimary h-screen md:h-full w-full">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 bg-bgGamePrimary">
                    <h3 className="uppercase text-4xl font-semibold text-white pt-8">Hier<br/>Gossip Tracken</h3>
                    <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                        {loading ? (
                            <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                                <LottieLoader/>
                            </div>
                        ) : (
                        <div className={`opacity-100`}>
                            {gossipData.map(gossip => (
                                <div
                                    key={gossip.id}
                                    className="bg-white py-3 px-5 rounded-3xl my-2"
                                    onClick={() => toggleBox(gossip.id)}
                                >
                                    <div className="flex gap-x-3 items-center">
                                        <span className="font-semibold text-lg">{gossip.id}</span>
                                        <p className={`text-sm ${expandedBoxes[gossip.id] ? '' : 'line-clamp-2'}`}>
                                            {gossip.title}
                                        </p>
                                    </div>
                                    {expandedBoxes[gossip.id] && (
                                        <div className="text-center mt-4 mb-2">
                                            <button onClick={() => handleConfirmButtonClick(gossip.id)} className="bg-bgDarkGrayPrimary text-white w-full py-3 rounded-xl">Gossip bestätigen</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                number={selectedNumber}
                onClose={closeModal}
            />
        </>
    )
}

export default GossipTrackerView;