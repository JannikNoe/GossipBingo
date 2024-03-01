import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../services/api.jsx";
import DoneGif from "../../images/gifs/doneGif.gif";

const AccountDeleteModal = ({ onClose }) => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const userId = localStorage.getItem('userId');
    const [confirmationChecked, setConfirmationChecked] = useState(false);


    const handleDeleteUser = async () => {
        if (!confirmationChecked) {
            // Wenn die Bestätigung nicht erfolgt ist, tue nichts
            return;
        }

        try {
            const response = await api.delete(`http://127.0.0.1:8000/api/user/delete/${userId}`);
            console.log(response.data);
            console.log(response.data.message); // Erfolgsmeldung ausgeben
            onClose(); // Modal schließen
            handleLogout();
        } catch (error) {
            // Fehlermeldung anzeigen oder entsprechend reagieren
            console.error('Fehler beim Löschen des Benutzers:', error);
        }
    };

    const handleLogout = async () => {
        try {
            localStorage.clear();
            navigate('/login');
        } catch (error) {
            console.error('Fehler beim Logout:', error);
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-3xl w-[80%] relative">
                <div className="absolute right-3 top-3" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </div>
                <h2 className="text-lg font-semibold pt-4">Account löschen</h2>
                <p className="pt-1">Bist du dir sicher, dass du deinen Account löschen möchtest?</p>
                <div className="flex items-center justify-center mt-4">
                    <input
                        type="checkbox"
                        checked={confirmationChecked}
                        onChange={(e) => setConfirmationChecked(e.target.checked)}
                        className="mr-2"
                    />
                    <label className="">Ich bestätige, dass ich meinen Account löschen möchte.</label>
                    <p className="text-sm pt-2 text-red-500">
                        {errorMessage && <p className="error">{errorMessage}</p>}
                    </p>
                </div>
                <button
                    onClick={handleDeleteUser}
                    className={`uppercase w-full transition rounded-2xl px-3 py-3 text-md font-medium shadow-sm mt-4 ${
                        confirmationChecked ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    }`}
                    disabled={!confirmationChecked}
                >
                    Account löschen
                </button>
            </div>
        </div>
    );
}

export default AccountDeleteModal;