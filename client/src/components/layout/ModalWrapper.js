import React, { useState, useEffect } from 'react';
import api from "../../services/api";

const BingoChecker = ({ gameId }) => {
    const [bingoWinner, setBingoWinner] = useState(null);

    // Funktion zum Überprüfen des Bingos
    const checkBingo = async () => {
        const gameId = localStorage.getItem('currentGameId');
        try {
            const response = await api.get(`http://127.0.0.1:8000/api/bingo-check/${gameId}`);
            // const setBingoWinner = response.data;
            console.log(response.data)
            // if (winner) {
            //     setBingoWinner(winner);
            // }
        } catch (error) {
            console.error('Fehler beim Bingo-Check:', error);
        }
    };

    // Effekt, um den Bingo-Check alle 20 Sekunden auszuführen
    useEffect(() => {
        const interval = setInterval(() => {
            checkBingo();
        }, 10000);

        // Aufräumen beim Komponentenabbau
        return () => clearInterval(interval);
    }, []); // Leeres Array als Abhängigkeit bedeutet, dass dieser Effekt nur einmalig beim Mounten ausgeführt wird

    // JSX für das Modal, das bei Bingo angezeigt wird
    const bingoModal = bingoWinner && (
        <div className="modal">
            <div className="modal-content">
                <h2>Bingo Gewinner!</h2>
                <p>{bingoWinner.name} hat Bingo gewonnen!</p>
            </div>
        </div>
    );

    return bingoModal;
};

export default BingoChecker;