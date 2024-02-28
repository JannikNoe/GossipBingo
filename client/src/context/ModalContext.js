// ModalContext.js
import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [isGameWinnerModalOpen, setIsGameWinnerModalOpen] = useState(true);

    const openGameWinnerModal = () => setIsGameWinnerModalOpen(true);
    const closeGameWinnerModal = () => setIsGameWinnerModalOpen(false);

    return (
        <ModalContext.Provider value={{
            isGameWinnerModalOpen,
            openGameWinnerModal,
            closeGameWinnerModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};
