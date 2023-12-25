import React, {useState, useEffect} from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import TrackingGifs from "./trackingGifs";


const openRequests = [
    { id: 1, text: 'Alkohol steht bereit' },
    { id: 2, text: 'Geile Menschen sind am Start' },
    { id: 3, text: 'Bereit für einen geilen Abend' },
    { id: 4, text: 'Jannik plant eine Kuschel-Ecke für alle' },
    { id: 5, text: 'Sara organisiert ein spontanes Tanzbattle' },
    { id: 6, text: 'Max und Anna bereiten das Karaoke-Set vor' },
    { id: 7, text: 'Kai startet ein Quiz über lustige Fakten' },
    { id: 8, text: 'Lena und Tom planen eine Mitternachtsüberraschung die auf jeden Fall mit Drogen zu tun hat' },
    { id: 9, text: 'Emma lädt zu einer Runde Wahrheit oder Pflicht ein' },
    { id: 10, text: 'Felix organisiert eine Verkleidungschallenge damit die Party richtig spaß macht' },
    { id: 11, text: 'Nora und Ben bereiten einen Filmeabend vor' }
];


const GossipTrackerView = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});

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
                                    {openRequests.map(request => (
                                        <div
                                            key={request.id}
                                            className="bg-white py-3 px-5 rounded-3xl my-2"
                                            onClick={() => toggleBox(request.id)}
                                        >
                                            <div className="flex gap-x-3 items-center">
                                                <span className="font-semibold text-lg">{request.id}</span>
                                                <p className={`text-sm ${expandedBoxes[request.id] ? '' : 'line-clamp-2'}`}>
                                                    {request.text}
                                                </p>
                                            </div>
                                            {expandedBoxes[request.id] && (
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