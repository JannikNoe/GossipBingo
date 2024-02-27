import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import GameHeader from "../layout/GameHeaderView";
import {useAuth} from "../../services/AuthContext";
import api from "../../services/api";
import UpdateEmailModal from "../modal/updateEmailModal";
import ResetPasswordModal from "../modal/updatePasswordModal";

const SettingsView = () => {

    useEffect(() => {
        if (!localStorage.getItem('token')){
            navigate('/login')
        }
    }, []);


    const navigate = useNavigate();
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
    const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);

    const openResetPasswordModal = () => {
        setShowResetPasswordModal(true);
    }

    const openChangeEmailModal = () => {
        setShowChangeEmailModal(true);
    }

    const closeResetPasswordModal = () => {
        setShowResetPasswordModal(false);
    }

    const closeChangeEmailModal = () => {
        setShowChangeEmailModal(false);
    }


    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('http://127.0.0.1:8000/api/logout')
            localStorage.clear()
            navigate('/login');
        } catch (error){
            console.log(error)
        }
    }


    return (
        <>
            <div className="bg-bgDarkGrayPrimary h-screen ">
                <GameHeader />
                <div className="max-w-xl m-auto px-6 pb-14 pt-8">
                    <h2 className="uppercase text-4xl font-semibold text-white">Lästige Einstellungen</h2>
                    <div
                        onClick={openChangeEmailModal}
                        className="bg-white text-black rounded-3xl py-6 px-6 mt-4 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h6 className="uppercase text-sm pb-1.5">Ich möchte meine</h6>
                                <h4 className="uppercase text-3xl font-medium">E-Mail ändern</h4>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={openResetPasswordModal}
                        className="bg-white text-black rounded-3xl py-6 px-6 mt-4 cursor-pointer"
                    >
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h6 className="uppercase text-sm pb-1.5">Ich möchte meine</h6>
                                <h4 className="uppercase text-3xl font-medium">Passwort ändern</h4>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white text-black rounded-3xl py-6 px-6 mt-4 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h6 className="uppercase text-sm pb-1.5">Ich möchte mich</h6>
                                <h4 className="uppercase text-3xl font-medium">Ausloggen</h4>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h6 className="text-white text-center">Du möchtest deinen Account löschen?</h6>
                        <button className="bg-red-500 text-white w-full py-3 rounded-2xl uppercase text-xl mt-3">
                            🗑 Account löschen
                        </button>
                        <h6 className="text-white/30 text-center pt-4 text-sm">(Und Freundschaft mit Jannik beenden)</h6>
                    </div>
                </div>
            </div>
            {showResetPasswordModal && <ResetPasswordModal onClose={closeResetPasswordModal} />}
            {showChangeEmailModal && <UpdateEmailModal onClose={closeChangeEmailModal} />}
        </>
    )
}

export default SettingsView;