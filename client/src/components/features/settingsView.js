import React from 'react';
import {Link} from "react-router-dom";
import GameHeader from "../layout/GameHeaderView";

const SettingsView = () => {
    return (
        <>
            <div className="bg-bgDarkGrayPrimary h-screen ">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 pt-8">
                    <h2 className="uppercase text-4xl font-semibold text-white">Lästige Einstellungen</h2>
                    <Link to="">
                        <div className="bg-white text-black rounded-3xl py-6 px-6 mt-4">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <h6 className="uppercase text-sm pb-1.5">Ich möchte meine</h6>
                                    <h4 className="uppercase text-3xl font-medium">E-Mail ändern</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="bg-white text-black rounded-3xl py-6 px-6 mt-4">
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <h6 className="uppercase text-sm pb-1.5">Ich möchte meine</h6>
                                    <h4 className="uppercase text-3xl font-medium">Passwort ändern</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="mt-8">
                        <h6 className="text-white text-center">Du möchtest deinen Account löschen?</h6>
                        <button className="bg-red-500 text-white w-full py-3 rounded-2xl uppercase text-xl mt-3">
                            🗑 Account löschen
                        </button>
                        <h6 className="text-white/30 text-center pt-4 text-sm">(Und Freundschaft mit Jannik beenden)</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsView;