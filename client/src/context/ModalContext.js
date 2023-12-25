// ModalContext.js
import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isRoundWinnerModalOpen, setIsRoundWinnerModalOpen] = useState(false);
    const [isGameWinnerModalOpen, setIsGameWinnerModalOpen] = useState(false);

    const openRoundWinnerModal = () => setIsRoundWinnerModalOpen(true);
    const closeRoundWinnerModal = () => setIsRoundWinnerModalOpen(false);

    const openGameWinnerModal = () => setIsGameWinnerModalOpen(true);
    const closeGameWinnerModal = () => setIsGameWinnerModalOpen(false);

    return (
        <ModalContext.Provider value={{
            isRoundWinnerModalOpen,
            openRoundWinnerModal,
            closeRoundWinnerModal,
            isGameWinnerModalOpen,
            openGameWinnerModal,
            closeGameWinnerModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};
