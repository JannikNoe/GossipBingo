import React, {useState, useEffect, useContext} from 'react';
import {ModalContext} from "../../../../context/ModalContext";
import TestProfileImg from "../../../../images/profileImage.jpg";

const RoundWinnerModal = () => {
    const { isRoundWinnerModalOpen, closeRoundWinnerModal } = useContext(ModalContext);
    if (!isRoundWinnerModalOpen) return null;

    return (
        <>
         <div className="bg-bgGrayPrimary rounded-3xl relative p-5 !py-7 mt-8 mx-6 w-[90%] md:w-[530px] text-center">
             <h2 className="text-3xl uppercase font-semibold">Das Wars!</h2>
             <h6 className="text-md pt-2">Der Rundensieger ist ...</h6>
             <div className="relative">
                 <div className="my-6 justify-center flex items-center">
                     <img src={TestProfileImg} alt="Das Profilbild eines Mitspielers" className="rounded-full w-[140px] h-[140px]"/>
                 </div>
                 <div className="bg-white p-1.5 rounded-full absolute right-16 bottom-1"><span>👑</span></div>
             </div>
             <h3 className="uppercase text-3xl font-semibold mb-8">Jannik 🥳</h3>
             <button
                 onClick={closeRoundWinnerModal}
                 className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm">
                 Zurück
             </button>
         </div>
        </>
    )
}

const GameWinnerModal = () => {
    const { isGameWinnerModalOpen, closeGameWinnerModal } = useContext(ModalContext);
    if (!isGameWinnerModalOpen) return null;

    const victoryData = [
        { roundNumber: 1, timestamp: '2023-12-23 22:43:23' },
        { roundNumber: 2, timestamp: '2023-12-23 23:13:23' },
        { roundNumber: 3, timestamp: '2023-12-23 23:43:23' },
    ];

    return (
        <>
            <div className="bg-bgGrayPrimary rounded-3xl relative p-5 !py-7 mt-8 mx-6 w-[90%] md:w-[530px] text-center">
                <h2 className="text-3xl uppercase font-semibold">Das Wars!</h2>
                <h6 className="text-md pt-2">Der Rundensieger ist ...</h6>
                <div className="relative">
                    <div className="my-6 justify-center flex items-center">
                        <img src={TestProfileImg} alt="Das Profilbild eines Mitspielers" className="rounded-full w-[140px] h-[140px]"/>
                    </div>
                    <div className="bg-white p-1.5 rounded-full absolute right-24 bottom-1"><span>👑</span></div>
                </div>
                <h3 className="uppercase text-3xl font-semibold mb-8">Jannik 🥳</h3>

                {victoryData.map((victory, index) => (
                    <div className="flex justify-between py-3.5 px-4 bg-white rounded-full my-3">
                        <div className="flex gap-x-2 text-sm">
                            <h4>👑</h4>
                            <h4>Runde {victory.roundNumber}</h4>
                        </div>
                        <div className="bg-black text-white text-[11px] rounded-full py-1 px-2">{victory.timestamp}</div>
                    </div>
                ))}

                <button
                    onClick={closeGameWinnerModal}
                    className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm">
                    Zurück
                </button>
            </div>
        </>
    )
}

export { RoundWinnerModal, GameWinnerModal}