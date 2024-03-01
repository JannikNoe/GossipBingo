import React, {useState, useEffect} from 'react';
import api from "../../../../services/api.jsx";
import LottieLoader from "../../../base/loader.jsx";

const UncheckedScenariosAccordion = () => {

    // toggle der verschiedenen offenen Anfragen Boxen
    const [activeTab, setActiveTab] = useState('openRequests'); // 'openRequests' oder 'pastGossip'
    const [expandedBoxes, setExpandedBoxes] = useState({});
    const [gossipData, setGossipData] = useState([]);
    const [gameId, setGameId] = useState(null);
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang

    useEffect(() => {
        loadGossipData();
    }, []);


    const checkIfGameStarted = async () => {
        try {
            const response = await api.get('http://127.0.0.1:8000/api/games/latest');
            localStorage.setItem('currentGameId', response.data.game.id)
        } catch (error) {
            console.error('Fehler beim Abrufen des Spielstatus', error);
            return false; // Bei einem Fehler wird das Spiel als nicht gestartet betrachtet
        }
    };

    const loadGossipData = async () => {
        setLoading(true); // Ladezustand setzen
        await checkIfGameStarted();
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
                            <div className="flex gap-x-3 items-center">
                                <span className="font-semibold text-lg">{gossip.id}</span>
                                <p className={`text-sm ${expandedBoxes[gossip.id] ? '' : 'line-clamp-2'}`}>
                                    {gossip.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default UncheckedScenariosAccordion;