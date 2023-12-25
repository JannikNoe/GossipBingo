import React, { useState } from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import DashboardView from "./dashboardView";
import profileImage from "../../../../images/profileImage.jpg"
import {Link} from "react-router-dom";

const userData = [
    {
        profileImg:profileImage,
        email:'jannik.noe@gmail.com',
        name:'Jannik',
    },
]

const UserManagement = () => {

    const [expandedBoxes, setExpandedBoxes] = useState({});

    const toggleBox = (id) => {
        setExpandedBoxes((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div>
            <div className="bg-bgDarkGrayPrimary h-screen ">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 pt-8">
                    <div className="rounded-3xl p-5 mt-8 gap-x-2 bg-bgGrayPrimary gap-y-2">
                        <h4 className="uppercase font-semibold text-xl text-center pt-4 pb-3">Nutzerverwaltung</h4>
                        <div className="flex gap-x-3 p-3 rounded-full bg-white mt-2">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <g id="Gruppe_44" data-name="Gruppe 44" transform="translate(0 0.366)">
                                        <circle id="Ellipse_22" data-name="Ellipse 22" cx="11" cy="11" r="11" transform="translate(0 -0.366)"/>
                                        <path id="search_FILL0_wght400_GRAD0_opsz48" d="M15.39,15.951,11.737,12.3a3.061,3.061,0,0,1-.972.563,3.6,3.6,0,0,1-3.722-.84A3.426,3.426,0,0,1,6,9.506,3.557,3.557,0,0,1,9.57,5.95a3.4,3.4,0,0,1,2.507,1.042,3.555,3.555,0,0,1,.84,3.667,3.526,3.526,0,0,1-.583,1.042L16,15.34ZM9.57,12.228a2.6,2.6,0,0,0,1.917-.8,2.733,2.733,0,0,0,0-3.848,2.6,2.6,0,0,0-1.917-.8A2.727,2.727,0,0,0,6.833,9.506,2.727,2.727,0,0,0,9.57,12.228Z" transform="translate(0 -0.316)" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                                </svg>
                            </div>
                            <input type="text" placeholder="Suche nach Nutzern…" className="w-full"/>
                        </div>
                        <div className="">
                            {userData.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white py-3 px-5 rounded-3xl my-2"
                                    onClick={() => toggleBox(item.id)}
                                >
                                    <div className="flex gap-x-3 items-center">
                                        <img src={item.profileImg} className="w-14 h-14 rounded-full"/>
                                        <h6 className={`text-md ${expandedBoxes[item.id] ? 'hidden' : 'line-clamp-2'}`}>{item.email}</h6>
                                    </div>
                                    {expandedBoxes[item.id] && (
                                        <div className="text-left mt-4 mb-2">
                                            <h6 className="text-lg">{item.email}</h6>
                                            <h6 className="text-lg">{item.name}</h6>
                                            <button className="bg-red-500 text-white w-full py-3 rounded-xl uppercase text-xl mt-3">
                                                🗑 Nutzer löschen
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/dashboard">
                        <div className="col-span-2 uppercase w-full rounded-3xl px-3 py-4 text-md font-semibold shadow-sm bg-bgGrayPrimary text-center mt-4">
                            <h4 className="uppercase font-medium text-xl text-DarkGrayPrimary">Zurück zum Dashboard</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserManagement;