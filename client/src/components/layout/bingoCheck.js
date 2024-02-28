import React, { useState, useEffect } from 'react';
import api from "../../services/api";

const BingoChecker = ({ gameId }) => {

    const [bingoWinner, setBingoWinner] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const checkBingo = async () => {
        const gameId = localStorage.getItem('currentGameId');
        try {
            const response = await api.get(`http://127.0.0.1:8000/api/bingo-check/${gameId}`);
            const { winner } = response.data;
            console.log(response.data)
            if (response.status === 200 && winner) {
                setBingoWinner(winner);
                setModalOpen(true);
            }
        } catch (error) {
            console.error('Fehler beim Bingo-Check:', error);
        }
    };

    useEffect(() => {
        checkBingo();
        const intervalId = setInterval(() => {
            checkBingo();
        }, 30000);

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
                    <div className="modal absolute bg-white rounded-2xl w-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-[999] p-6">
                        <div className="modal-content text-center">
                            <div className="text-right">
                                <span className="close" onClick={closeModal}>&times;</span>
                            </div>
                            <div className="flex justify-center">
                                <div className="bg-gray-50 h-20 w-20 flex justify-center items-center rounded-full">
                                    <span className="text-5xl">👑</span>
                                </div>
                            </div>
                            <p className="pt-5 text-lg">{bingoWinner.username} hat gewonnen!</p>
                            <p className="text-sm pt-1">Vielen Dank, dass Gossip in die Welt getragen hast.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

};

export default BingoChecker;