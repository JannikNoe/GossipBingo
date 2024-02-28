import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import {Link, useNavigate} from "react-router-dom";
import LottieLoader from "../base/loader";

const BingoChecker = ({ gameId }) => {

    const [bingoWinner, setBingoWinner] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [gossipData, setGossipData] = useState([]);
    const [loading, setLoading] = useState(true); // Zustand für den Ladevorgang
    const navigate = useNavigate();

    const checkBingo = async () => {
        const gameId = localStorage.getItem('currentGameId');
        try {
            const response = await api.get(`http://127.0.0.1:8000/api/bingo-check/${gameId}`);
            const { winner } = response.data;
            if (response.status === 200 && winner) {
                setBingoWinner(winner);
                setModalOpen(true);
            }
        } catch (error) {
            console.error('Fehler beim Bingo-Check:', error);
        }
    };

    const loadGossipData = async () => {
        setLoading(true); // Ladezustand setzen
        try {
            const gameId = localStorage.getItem('currentGameId');
            const response = await api.get(`http://127.0.0.1:8000/api/gossip/${gameId}/1`);
            setGossipData(response.data.gossip); // Nur die Gossip-Daten speichern, ohne Timestamp-Kram
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Ladezustand nach Abschluss des Ladevorgangs aufheben, unabhängig vom Erfolg oder Fehler
        }
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://127.0.0.1:8000/api/logout')
            localStorage.clear()
            navigate('/login');
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        checkBingo();
        loadGossipData();
        const intervalId = setInterval(() => {
            checkBingo();
        }, 5000);

        // Aufräumen beim Komponentenabbau
        return () => clearInterval(intervalId);
    }, []);

    const closeModal = () => {
        setModalOpen(false); // Funktion zum Schließen des Modals
    };

    return (
        <>
            {modalOpen && (
                <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-[999]">
                    <div className="modal absolute bg-white rounded-2xl w-[90%] md:w-[350px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-[999] p-6">
                        <div className="modal-content text-center">
                            <div className="text-xl text-right" onClick={closeModal}>x</div>
                            <div className="flex justify-center">
                                <div className="bg-gray-50 h-20 w-20 flex justify-center items-center rounded-full">
                                    <span className="text-5xl">👑</span>
                                </div>
                            </div>
                            <p className="pt-5 text-lg">{bingoWinner.username} hat gewonnen!</p>
                            <p className="text-sm pt-1">Vielen Dank, dass Gossip in die Welt getragen hast.</p>
                            <h6 className="text-lg font-semibold pt-3 pb-2">Was ist alles passiert?</h6>
                            <div className="overflow-y-scroll h-[150px] bg-gray-100 rounded-lg p-2">
                                {loading ? (
                                    <div className="w-full flex justify-center py-3 px-5 rounded-3xl my-2">
                                        <LottieLoader/>
                                    </div> // Placeholder-Loader
                                ) : (
                                    gossipData.map(index => (
                                        <p className="text-sm pt-4">{index.title}</p>
                                    ))
                                )}


                            </div>
                            <button onClick={handleLogout} className="pt-5 underline">Spiel verlassen</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

};

export default BingoChecker;