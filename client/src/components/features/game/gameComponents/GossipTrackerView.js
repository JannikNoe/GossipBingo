import React, {useState, useEffect} from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import TrackingGifs from "./trackingGifs";
import axios from "axios";


const GossipTrackerView = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});
    const [gossipData, setGossipData] = useState([]);
    const [gameId, setGameId] = useState(null);

    useEffect(() => {
        loadGossipData();
    }, []);


    const loadGossipData = async () => {
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await axios.get(`http://127.0.0.1:8000/api/gossip/${gameId}/0`); // Fetching gossip with status 0
            setGossipData(response.data.gossip);
            // console.log(response.data.gossip)
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


    // Modal Handler
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

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
                    <TrackingGifs></TrackingGifs>
                    <h3 className="text-center text-5xl font-semibold pt-4">DONE</h3>
                    <p className="text-center text-lg pt-1">Dein Gossip wurde in die Welt getragen.</p>
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
        <>
            <div className="bg-bgGamePrimary h-[100%]">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14">
                    <h3 className="uppercase text-4xl font-semibold text-white pt-8">Hier<br/>Gossip Tracken</h3>
                    <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                        <div className={`transition-all duration-500 ${activeTab === 'openRequests' ? 'opacity-100' : 'opacity-0'}`}>
                            {activeTab === 'openRequests' &&
                                <>
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
                                                    <button onClick={handleFieldClick} className="bg-bgDarkGrayPrimary text-white w-full py-3 rounded-xl">Gossip bestätigen</button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </>
                            }
                        </div>
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