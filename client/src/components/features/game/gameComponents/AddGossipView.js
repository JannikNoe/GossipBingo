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


const AddGossipView = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});

    const toggleBox = (id) => {
        setExpandedBoxes(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <>
            <div className="bg-bgGamePrimary h-[100%]">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14">
                    <h3 className="uppercase text-4xl font-semibold text-white pt-8">Hier<br/>Gossip Eintragen</h3>
                    <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                        <div className="flex justify-between items-center gap-x-2">
                            <input
                                type="text"
                                className="w-full p-1.5 rounded-xl"
                            />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                                    <g id="Gruppe_69" data-name="Gruppe 69" transform="translate(-312 -229)">
                                        <g id="Gruppe_46" data-name="Gruppe 46" transform="translate(294 208)">
                                            <rect id="Rechteck_8" data-name="Rechteck 8" width="38" height="38" rx="19" transform="translate(18 21)" fill="#fff"/>
                                        </g>
                                        <path id="send_FILL1_wght400_GRAD0_opsz24" d="M120-788.5v-4.314l5.751-1.438L120-795.686V-800l13.66,5.751Z" transform="translate(206.908 1042.249)" fill="#202020" stroke="#202020" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className={`transition-all duration-500 ${activeTab === 'openRequests' ? 'opacity-100' : 'opacity-0'}`}>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGossipView;