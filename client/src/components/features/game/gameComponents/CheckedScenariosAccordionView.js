import React, {useState, useEffect} from 'react';

const openRequests = [
    { id: 1, text: 'Alex richtet eine Smoothie-Bar ein', timestamp: '24.12.2023 - 18:00 Uhr', userId: 101 },
    { id: 2, text: 'Bea und Chris veranstalten ein virtuelles Reality-Spielturnier', timestamp: '24.12.2023 - 18:30 Uhr', userId: 102 },
    { id: 3, text: 'Diana organisiert einen Outdoor-Filmabend', timestamp: '24.12.2023 - 19:00 Uhr', userId: 103 },
    { id: 4, text: 'Erik und Fiona bereiten ein Gourmet-Grillfest vor', timestamp: '24.12.2023 - 19:30 Uhr', userId: 104 },
    { id: 5, text: 'Greta und Henry veranstalten eine Kostümparty mit einem bestimmten Thema', timestamp: '24.12.2023 - 20:00 Uhr', userId: 105 },
    { id: 6, text: 'Iris und Jonas organisieren einen Spieleabend mit Brettspielen und Kartenspielen', timestamp: '24.12.2023 - 20:30 Uhr', userId: 106 },
    { id: 7, text: 'Karl führt eine Open-Mic-Nacht ein', timestamp: '24.12.2023 - 21:00 Uhr', userId: 107 },
    { id: 8, text: 'Lena und Max planen eine Schatzsuche im Garten oder Haus', timestamp: '24.12.2023 - 21:30 Uhr', userId: 108 },
    { id: 9, text: 'Nina lädt zu einem Workshop für kreatives Malen oder Handwerk ein', timestamp: '24.12.2023 - 22:00 Uhr', userId: 109 },
    { id: 10, text: 'Oliver und Petra organisieren einen Tanzwettbewerb mit verschiedenen Musikgenres', timestamp: '24.12.2023 - 22:30 Uhr', userId: 110 },
    { id: 11, text: 'Quentin und Rita bereiten ein internationales Buffet vor', timestamp: '24.12.2023 - 23:00 Uhr', userId: 111 }
];

const CheckedScenariosAccordion = () => {

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
                            <div className="flex gap-x-3 items-center relative mt-2">
                                <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <g id="Gruppe_44" data-name="Gruppe 44" transform="translate(-52 -449)">
                                        <circle id="Ellipse_22" data-name="Ellipse 22" cx="11" cy="11" r="11" transform="translate(52 449)"/>
                                        <path id="done_FILL0_wght400_GRAD0_opsz48" d="M157.093,346.49,154,343.4l.594-.594,2.5,2.5,5.3-5.3.594.594Z" transform="translate(-95.495 116.755)" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                <div className="bg-black rounded-full py-1 px-3">
                                    <p className="text-white text-[11px]">{request.timestamp}</p>
                                </div>
                            </div>
                            <p className="text-sm pt-4">{request.text}</p>

                            {expandedBoxes[request.id] && (
                                <div>
                                    <h6 className="text-sm pt-2">Bestätigt von</h6>
                                    <div className="flex mt-1">
                                        <img src="client/src/components/features/game/GameView" alt="" className="bg-black w-[30px] h-[30px] rounded-full border-white border-1" />
                                        <div className="bg-black w-[30px] h-[30px] rounded-full border-white border-1 text-white text-xs font-semibold flex justify-center items-center">
                                            <span className="block ">+4</span>
                                        </div>
                                    </div>
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

export default CheckedScenariosAccordion;