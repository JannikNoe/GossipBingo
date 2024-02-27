import React, { useState } from 'react';
import api from "../../services/api";
import DoneGif from "../../images/gifs/doneGif.gif";

const ChangePasswordModal = ({ onClose }) => {

    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const userId = localStorage.getItem('userId');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handlePasswordChange = async () => {
        if (newPassword !== repeatPassword) {
            setErrorMessage("Die eingegebenen Passwörter stimmen nicht überein.");
            return;
        }

        try {
            const response = await api.put(`http://127.0.0.1:8000/api/user/update-password/${userId}`, {
                new_password: newPassword
            });
            console.log(response.data);
            console.log(response.data.message); // Erfolgsmeldung ausgeben
            setPasswordChanged(true); // Setze den Zustand auf "Passwort wurde geändert"
        } catch (error) {
            setErrorMessage(error.response.data.message); // Fehlermeldung anzeigen
        }
    };

    return (
        <div>
            {!passwordChanged ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-3xl w-[80%] relative">
                        <div className="absolute right-3 top-3" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                <path
                                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold pt-4">Passwort ändern</h2>
                        <div className="mt-2">
                            <label className="inline-block mb-1">Neues Passwort</label>
                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-1.5 pl-3 rounded-xl bg-gray-100"/>
                        </div>
                        <div className="mt-2">
                            <label className="inline-block mb-1">Passwort wiederholen</label>
                            <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} className="w-full p-1.5 pl-3 rounded-xl bg-gray-100"/>
                        </div>
                        <p className="text-sm pt-2 text-red-500">
                            {errorMessage && <p className="error">{errorMessage}</p>}
                        </p>
                        <button
                            onClick={handlePasswordChange}
                            className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-medium text-white shadow-sm mt-4">
                            Passwort ändern
                        </button>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-3xl w-[80%] relative">
                        <div className="absolute right-3 top-3" onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                <path
                                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>
                        </div>
                        <div className="flex justify-center mt-6">
                            <img src={DoneGif} alt="Gif das einen Jungen zeigt, der seinen Daumen nach oben zeigt." className="rounded-lg"/>
                        </div>
                        <h2 className="text-lg font-semibold pt-4 text-center">Passwort erfolgreich geändert</h2>
                        <button onClick={onClose} className="uppercase w-full rounded-2xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-medium text-white shadow-sm mt-4">
                            Schließen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

}

export default ChangePasswordModal;