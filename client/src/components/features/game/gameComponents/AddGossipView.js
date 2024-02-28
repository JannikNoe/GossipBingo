import React, {useState, useEffect} from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import api from "../../../../services/api";
import LottieLoader from "../../../base/loader";


const openRequests = [
    { id: null , text: '' },

];


const AddGossipView = () => {

    const [gossipData, setGossipData] = useState([]);
    const [activeTab, setActiveTab] = useState('openRequests');
    const [expandedBoxes, setExpandedBoxes] = useState({});
    const [text, setText] = useState('');
    const [gameId, setGameId] = useState(null);
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang

    useEffect(() => {
        getLatestGameId();
        loadGossipData();
    }, []);


    const loadGossipData = async () => {
        setLoading(true); // Ladezustand setzen
        try {
            const gameId = localStorage.getItem('currentGameId'); // Assuming you stored the game ID in local storage
            const response = await api.get(`http://127.0.0.1:8000/api/gossip/${gameId}/0`); // Fetching gossip with status 0
            setGossipData(response.data.gossip);
            console.log(response.data.gossip)
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };

    // toggle der verschiedenen offenen Anfragen Boxen
    const toggleBox = (id) => {
        setExpandedBoxes(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));


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

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://127.0.0.1:8000/api/gossip', { game_id: gameId, title: text });
            console.log(response.data.message);
            // Handle success, e.g., clear input field
            setText('');
            // Reload gossip data after adding a new gossip
            loadGossipData();
        } catch (error) {
            console.error('Error:', error.response.data.message);
            // Handle error, e.g., show error message to user
        }
    };


    return (
        <>
            <div className="bg-bgGamePrimary h-screen">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 bg-bgGamePrimary">
                    <h3 className="uppercase text-4xl font-semibold text-white pt-8">Hier<br/>Gossip Eintragen</h3>
                    <div className="bg-bgGrayPrimary rounded-3xl relative p-5 mt-8">
                        {loading ? (
                            <div className="w-full flex justify-center bg-white py-3 px-5 rounded-3xl my-2">
                                <LottieLoader/>
                            </div>
                        ) : (
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex justify-between items-center gap-x-2">
                                        <input
                                            type="text"
                                            value={text}
                                            onChange={handleChange}
                                            className="w-full p-1.5 rounded-xl"
                                            placeholder="Gossip Text"
                                        />
                                        <button type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                                                <g id="Gruppe_69" data-name="Gruppe 69" transform="translate(-312 -229)">
                                                    <g id="Gruppe_46" data-name="Gruppe 46" transform="translate(294 208)">
                                                        <rect id="Rechteck_8" data-name="Rechteck 8" width="38" height="38" rx="19" transform="translate(18 21)" fill="#fff"/>
                                                    </g>
                                                    <path id="send_FILL1_wght400_GRAD0_opsz24" d="M120-788.5v-4.314l5.751-1.438L120-795.686V-800l13.66,5.751Z" transform="translate(206.908 1042.249)" fill="#202020" stroke="#202020" strokeLinejoin="round" strokeWidth="1"/>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <div className={`transition-all duration-500 ${activeTab === 'openRequests' ? 'opacity-100' : 'opacity-0'}`}>
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
                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddGossipView;