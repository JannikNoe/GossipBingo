import React from 'react';
import GameHeader from "../../../layout/GameHeaderView";
import {Link} from "react-router-dom";

const DashboardView = () => {
    return (
        <div>
            <div className="bg-bgDarkGrayPrimary h-screen ">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 pt-8">
                    <h2 className="uppercase text-4xl font-semibold text-white">Geschlossene Gesellschaft</h2>
                    <div className="rounded-3xl relative p-5 mt-8 grid grid-cols-2 gap-x-2 bg-bgGrayPrimary gap-y-2">
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold shadow-sm text-white text-center">
                            <h6 className="uppercase font-normal text-sm pb-0.5">Spiel</h6>
                            <h4 className="uppercase font-medium text-xl">Erstellen</h4>
                        </div>
                        <div className="col-span-1 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-7 text-md font-semibold shadow-sm text-white text-center">
                            <h6 className="uppercase font-normal text-sm pb-0.5">Spiel</h6>
                            <h4 className="uppercase font-medium text-xl">Beenden</h4>
                        </div>
                        <div className="col-span-2 uppercase w-full rounded-3xl bg-bgDarkGrayPrimary px-3 py-4 text-md font-semibold shadow-sm text-white text-center">
                            <h4 className="uppercase font-medium text-xl">Spiel Starten</h4>
                        </div>
                        <div className="col-span-2 uppercase w-full rounded-3xl px-3 py-4 text-md font-semibold shadow-sm text-DarkGrayPrimary text-center">
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
                </div>
            </div>
        </div>
    )
}

export default DashboardView;