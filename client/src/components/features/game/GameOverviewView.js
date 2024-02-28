import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameHeader from "../../layout/GameHeaderView";
import UserRoleDiv from "./dashboard/UserRoleDiv";
import api from "../../../services/api";

const requirementList = [
    { id: 1, text: 'Alkohol steht bereit' },
    { id: 2, text: 'Geile Menschen sind am Start' },
    { id: 3, text: 'Bereit für einen geilen Abend' },
];



const GameOverview = () => {

    const navigate = useNavigate();
    const [gameStatus, setGameStatus] = useState(localStorage.getItem('currentGameStatus'));

    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/login')
        }
        getLatestGame();

    }, []);

    const getLatestGame = async () => {
        try {
            const response = await api.get('http://127.0.0.1:8000/api/games/latest');
            if (response.data.game) {
                localStorage.setItem('currentGameId', response.data.game.id);
                localStorage.setItem('currentGameStatus', response.data.game.status);
            }
        } catch (error) {
            console.error('Fehler beim Abrufen des neuesten Spiels', error);
        }
    };

    return (
        <div className="bg-bgDarkGrayPrimary h-screen">
            <GameHeader />
            <div className="max-w-xl m-auto px-6 pb-14 bg-bgDarkGrayPrimary  md:pt-10">
                <div className="bg-white rounded-3xl relative p-5 mt-8 md:mt-0">
                    <h3 className="uppercase text-2xl font-semibold">Spiel Beitreten</h3>
                    {requirementList.map(requirement => (
                        <div key={requirement.id} className="flex gap-x-2 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <g id="Gruppe_64" data-name="Gruppe 64" transform="translate(-40 -162)">
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="11" cy="11" r="11" transform="translate(40 162)"/>
                                    <path id="done_FILL0_wght400_GRAD0_opsz48" d="M157.093,346.49,154,343.4l.594-.594,2.5,2.5,5.3-5.3.594.594Z" transform="translate(-107.495 -170.245)" fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="1"/>
                                </g>
                            </svg>
                            <span>{requirement.text}</span>
                        </div>
                    ))}
                    <div className="mt-8">
                        <Link to="/gameview">
                            <button
                                className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm">
                                Start
                            </button>
                        </Link>
                    </div>
                    <div className="absolute top-4 right-5">
                        <Link to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
                                <g id="Gruppe_65" data-name="Gruppe 65" transform="translate(-334 -107)">
                                    <circle id="Ellipse_11" data-name="Ellipse 11" cx="11" cy="11" r="11" transform="translate(334 108)"/>
                                    <text id="_" data-name="?" transform="translate(341 125)" fill="#fff" fontSize="17" fontFamily="Poppins-Medium, Poppins" fontWeight="500"><tspan x="0" y="0">?</tspan></text>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="uppercase text-2xl font-semibold text-white">Weitere Möglichkeiten</h3>
                    {/*<Link to="">*/}
                        <div className="bg-bgYellowPrimary rounded-3xl mt-4 relative">
                            <div className="glassmorp z-10 absolute h-full w-full !rounded-3xl flex justify-center items-center">
                                <h3 className="text-xl font-semibold">Demnächst Verfügbar</h3>
                            </div>
                            <div className="flex justify-between items-center py-6 px-6">
                                <div className="">
                                    <h6 className="uppercase text-sm pb-1.5">Dein eigenes</h6>
                                    <h4 className="uppercase text-3xl font-medium">Profil</h4>
                                </div>
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.728" height="27.275" viewBox="0 0 18.728 27.275">
                                        <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-329.749 -449.501)">
                                            <line id="Linie_3" data-name="Linie 3" x2="17.226" y2="12.947" transform="translate(330.5 450.5)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                            <line id="Linie_4" data-name="Linie 4" x2="12.947" y2="17.226" transform="translate(347.726 462.83) rotate(90)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    {/*</Link>*/}

                    <Link to="/settings">
                        <div className="bg-[#8F60F8] rounded-3xl py-6 px-6 mt-4">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <h6 className="uppercase text-sm pb-1.5 text-white">Wo sind die</h6>
                                    <h4 className="uppercase text-3xl font-medium text-white">Einstellungen</h4>
                                </div>
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.728" height="27.275" viewBox="0 0 18.728 27.275">
                                        <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-329.749 -449.501)">
                                            <line id="Linie_3" data-name="Linie 3" x2="17.226" y2="12.947" transform="translate(330.5 450.5)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                            <line id="Linie_4" data-name="Linie 4" x2="12.947" y2="17.226" transform="translate(347.726 462.83) rotate(90)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <UserRoleDiv />
                </div>
                <div className="mt-10">
                    <span className="block text-center text-white uppercase pb-4">Wie gefällt die Gossip Bingo?</span>
                    <Link to="">
                    <button
                        className="uppercase w-full rounded-2xl bg-white px-3 py-3 text-md font-semibold text-DarkGrayPrimary shadow-sm">
                        Feedback geben
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default GameOverview;
