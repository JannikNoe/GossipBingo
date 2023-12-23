import React, {useState, useEffect} from 'react';

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


const UncheckedScenariosAccordion = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});

    const toggleBox = (id) => {
        setExpandedBoxes(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    return(
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
                                    <button className="bg-bgDarkGrayPrimary text-white w-full py-3 rounded-xl">Gossip bestätigen</button>
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Hier könnten weitere Elemente oder Kommentare stehen */}
                </>
            }
        </div>
    )
}

export default UncheckedScenariosAccordion;