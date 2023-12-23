// ModalWrapper.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {ModalContext} from "../../context/ModalContext";
import { RoundWinnerModal, GameWinnerModal } from "../features/game/gameComponents/winModale";

const ModalWrapper = () => {
    const location = useLocation();
    const { isRoundWinnerModalOpen, isGameWinnerModalOpen } = useContext(ModalContext);

    const excludedPaths = ['/', '/login', '/register', '/start'];

    if (excludedPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <>
            {isRoundWinnerModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <RoundWinnerModal />
                </div>
            )}
            {isGameWinnerModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <GameWinnerModal />
                </div>
            )}
        </>
    );
};

export default ModalWrapper;
