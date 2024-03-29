import React, {useState, useEffect} from 'react';
import api from "../../../../services/api.jsx";
import LottieLoader from "../../../base/loader.jsx";


const CheckedScenariosAccordion = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});
    const [gossipData, setGossipData] = useState([]);
    const [gameId, setGameId] = useState(null);
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang

    useEffect(() => {
        loadGossipData();
    }, []);

    const loadGossipData = async () => {
        setLoading(true); // Ladezustand setzen
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await api.get(`http://127.0.0.1:8000/api/gossip/${gameId}/1`); // Fetching gossip with status 0
            setGossipData(response.data.gossip.map(gossip => ({
                ...gossip,
                formattedTimestamp: formatTimestamp(gossip.updated_at) // Hinzufügen des formatierten Timestamps zu jedem Gossip-Eintrag
            })));
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = `${date.getHours()}:${date.getMinutes()} Uhr - ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        return formattedDate;
    };

    const toggleBox = (id) => {
        setExpandedBoxes(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return(

        <div className={`transition-all duration-500 ${activeTab === 'openRequests' ? 'opacity-100' : 'opacity-0'}`}>
            {loading ? ( // Überprüfen, ob geladen wird
                <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                    <LottieLoader/>
                </div> // Placeholder-Loader
            ) : (
                activeTab === 'openRequests' &&
                <>
                    {gossipData.map(gossip => (
                        <div
                            key={gossip.id}
                            className="bg-white py-3 px-5 rounded-3xl my-2"
                            onClick={() => toggleBox(gossip.id)}
                        >
                            <div className="flex gap-x-3 items-center relative mt-2">
                                <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                    <g id="Gruppe_44" data-name="Gruppe 44" transform="translate(-52 -449)">
                                        <circle id="Ellipse_22" data-name="Ellipse 22" cx="11" cy="11" r="11" transform="translate(52 449)"/>
                                        <path id="done_FILL0_wght400_GRAD0_opsz48" d="M157.093,346.49,154,343.4l.594-.594,2.5,2.5,5.3-5.3.594.594Z" transform="translate(-95.495 116.755)" fill="#fff" stroke="#fff" strokeLinejoin="round" stroke-width="1"/>
                                    </g>
                                </svg>
                                <div className="bg-black rounded-full py-1 px-3">
                                    <p className="text-white text-[11px]">{gossip.formattedTimestamp}</p>
                                </div>
                            </div>
                            <p className="text-sm pt-4">{gossip.title}</p>
                        </div>
                    ))}
                    {/* Hier könnten weitere Elemente oder Kommentare stehen */}
                </>
                )}
        </div>

    )
}

export default CheckedScenariosAccordion;