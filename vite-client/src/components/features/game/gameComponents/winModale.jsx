import React, {useState, useEffect, useContext} from 'react';
import {ModalContext} from "../../../../context/ModalContext.jsx";
import TestProfileImg from "../../../../images/profileImage.jpg";


const GameWinnerModal = () => {
    const { isGameWinnerModalOpen, closeGameWinnerModal } = useContext(ModalContext);
    if (!isGameWinnerModalOpen) return null;


    return (
        <>
            <div className="bg-bgGrayPrimary rounded-3xl relative p-5 !py-7 mt-8 mx-6 w-[90%] md:w-[530px] text-center">
                <h2 className="text-3xl uppercase font-semibold">Das Wars!</h2>
                <h6 className="text-md pt-2">Der Rundensieger ist ...</h6>
                <div className="relative">
                    <div className="bg-white p-1.5 rounded-full absolute right-24 bottom-1"><span>👑</span></div>
                </div>
                <h3 className="uppercase text-3xl font-semibold mb-8">Jannik 🥳</h3>

                <div className="flex justify-between py-3.5 px-4 bg-white rounded-full my-3">
                    <div className="flex gap-x-2 text-sm">
                        <h4>👑</h4>
                    </div>

                </div>


                <button
                    onClick={closeGameWinnerModal}
                    className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm">
                    Zurück
                </button>
            </div>
        </>
    )
}

export { GameWinnerModal }