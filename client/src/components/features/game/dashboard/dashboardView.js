import React, { useState, useEffect } from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import api from "../../../../services/api";

const gameStatusDescriptions = {
    0: 'Spiel erstellt',
    1: 'Spiel gestartet',
    2: 'Spiel beendet',
    3: 'Spiel Zurückgesetzt',
    // Fügen Sie hier weitere Statusbeschreibungen hinzu, falls notwendig
};



const DashboardView = () => {

    const navigate = useNavigate();
    const [gameStatus, setGameStatus] = useState(localStorage.getItem('currentGameStatus'));
    const username = localStorage.getItem('username')
    const userId = localStorage.getItem('userId')

    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(`http://127.0.0.1:8000/api/user-role/${userId}`)
            .then(response => {
                const userRoleValue = parseInt(response.data.role);
                setUserRole(userRoleValue);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    useEffect(() => {
        if (userRole !== null && userRole !== 1) {
            navigate('/gameoverview');
        }
    }, [userRole, navigate]);

    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/login')
        }
        getLatestGame();
        const handleStorageChange = () => {
            setGameStatus(localStorage.getItem('currentGameStatus'));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);



    const getLatestGame = async () => {
        try {
            const response = await api.get('http://127.0.0.1:8000/api/games/latest');
            console.log(response);
            if (response.data.game) {
                localStorage.setItem('currentGameId', response.data.game.id);
                localStorage.setItem('currentGameStatus', response.data.game.status);
            }
        } catch (error) {
            console.error('Fehler beim Abrufen des neuesten Spiels', error);
        }
    };

    const createGame = async (title) => {
        try {
            await api.post(`http://127.0.0.1:8000/api/games/create/${title}`);
            getLatestGame(); // Aktualisieren Sie die Spiel-ID nach dem Erstellen eines neuen Spiels
            setGameStatus(0)
        } catch (error) {
            console.error('Fehler beim Erstellen des Spiels', error);
        }
    };

    const changeGameStatus = async (newStatus) => {

        const currentGameId = localStorage.getItem('currentGameId');
        if (currentGameId) {
            try {
                await api.put(`http://127.0.0.1:8000/api/games/${currentGameId}/status/${newStatus}`);
                localStorage.setItem('currentGameStatus', newStatus); // Aktualisieren Sie hier den Status im State
                console.log(newStatus)
                setGameStatus(newStatus)
                // navigate('/gameOverview'); // Navigieren zu einer geschützten Seite
            } catch (error) {
                console.error('Fehler beim Ändern des Spielstatus:', error);
            }
        }
    };

    const LiveOrOffline = ({ status = localStorage.getItem('currentGameStatus')}) => {
        return (
            <div className="flex justify-center mb-2">
                {gameStatus === 3 ? (
                    <div className="border border-gray-600 rounded-lg w-[80px]">
                        <span className="text-gray-600 font-semibold text-md block">
                          OFFLINE
                        </span>
                    </div>
                ) : (
                    <div className="border border-red-600 rounded-lg w-[60px]">
                        <span className="pulse-animation text-red-600 font-semibold text-md block">
                          • LIVE
                        </span>
                    </div>
                )}
            </div>
        );
    };

    // zieht aus der LocalStorage

    return (
        <div>
            <div className="bg-bgDarkGrayPrimary h-full">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 pt-8">
                    <h2 className="uppercase text-4xl font-semibold text-white">Geschlossene Gesellschaft</h2>
                    <p className="text-white">{username}</p>
                    <div className="rounded-3xl relative p-5 mt-8 bg-bgGrayPrimary gap-y-2 text-center">
                        <LiveOrOffline status={gameStatus} />
                        <h6 className="uppercase font-semibold pb-0.5 text-xl">Aktueller Spielstatus:</h6>
                        <span className="">{gameStatusDescriptions[gameStatus] || 'Unbekannter Status'}</span>
                    </div>
                    <div className="rounded-3xl relative p-5 mt-8 grid grid-cols-2 gap-x-2 bg-bgGrayPrimary gap-y-2">
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold shadow-sm text-white text-center"
                             onClick={createGame}
                        >
                            <h6 className="uppercase font-normal text-sm pb-0.5">Spiel</h6>
                            <h4 className="uppercase font-medium text-xl">Erstellen</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold shadow-sm text-white text-center"
                             onClick={() => changeGameStatus(2)}
                        >
                            <h6 className="uppercase font-normal text-sm pb-0.5">Spiel</h6>
                            <h4 className="uppercase font-medium text-xl">Beenden</h4>
                        </div>
                        <div className="col-span-2 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-4 text-md font-semibold shadow-sm text-white text-center"
                             onClick={() => changeGameStatus(1)}
                        >
                            <h4 className="uppercase font-medium text-xl">Spiel Starten</h4>
                        </div>
                        <div className="col-span-2 uppercase w-full rounded-3xl px-3 py-4 text-md font-semibold shadow-sm text-DarkGrayPrimary text-center"
                             onClick={() => changeGameStatus(3)}
                        >
                            <h4 className="uppercase font-medium text-xl">Spiel Zurücksetzen</h4>
                        </div>
                    </div>
                    <div className="rounded-3xl relative p-5 mt-8 grid grid-cols-3 gap-x-2 bg-bgGrayPrimary gap-y-2 relative">
                        <div className="glassmorp z-10 absolute h-full w-full !rounded-3xl flex justify-center items-center">
                            <h3 className="text-xl font-semibold">Demnächst Verfügbar</h3>
                        </div>
                        <div className="col-span-3">
                            <h4 className="text-2xl uppercase font-semibold">Statistiken</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-white px-3 py-7 text-md font-semibold shadow-sm text-white text-center">
                            <h6 className="uppercase font-normal text-xs pb-2.5 text-black">Anzahl gespielter Spiele</h6>
                            <h4 className="uppercase font-medium text-2xl text-black">04</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-white px-3 py-7 text-md font-semibold shadow-sm text-white text-center">
                            <h6 className="uppercase font-normal text-xs pb-2.5 text-black">Anzahl erstelltem Gossip</h6>
                            <h4 className="uppercase font-medium text-2xl text-black">8473</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-white px-3 py-7 text-md font-semibold shadow-sm text-white text-center">
                            <h6 className="uppercase font-normal text-xs pb-2.5 text-black">Anzahl der erstellten Nutzer</h6>
                            <h4 className="uppercase font-medium text-2xl text-black">14</h4>
                        </div>
                    </div>
                    <Link to="/dashboard/usermanagement">
                        <div className="col-span-2 uppercase w-full rounded-3xl px-3 py-4 text-md font-semibold shadow-sm bg-bgGrayPrimary text-center mt-4">
                            <h4 className="uppercase font-medium text-xl text-DarkGrayPrimary">Nutzerverwaltung Öffnen</h4>
                        </div>
                    </Link>
                    <Link to="/gameoverview">
                        <div className="col-span-2 uppercase w-full rounded-3xl px-3 py-4 text-md text-white font-semibold shadow-sm text-center mt-4">
                            <h4 className="uppercase font-medium text-xl text-DarkGrayPrimary">Zurück zur Übersicht</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardView;