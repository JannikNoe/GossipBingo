import React, { useState } from 'react';
import PublicHeader from "../../layout/PublicHeaderView.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import GameHeader from "../../layout/GameHeaderView.jsx";
import api from "../../../services/api.jsx";

const Register = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        if (profileImage) {
            formData.append('profileImage', profileImage);
        }

        try {
            const response = await api.post('http://127.0.0.1:8000/api/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setIsRegistered(true); // Setzen Sie isRegistered auf true, wenn die Registrierung erfolgreich war
            setMessage(response.data.message);
            console.log(response.data);
        } catch (error) {
            console.error('Es gab einen Fehler bei der Registrierung', error);
            setMessage('Registrierung fehlgeschlagen');
        }
    };

    return (
        <div className="bg-bgDarkGrayPrimary h-screen">
            <div className="px-6 md:px-0">
                <PublicHeader />
            </div>
            {isRegistered ? (
                <div className="max-w-xl m-auto px-6 pb-14 mt-6 text-center">
                    <div className="bg-bgGrayPrimary rounded-2xl py-8 mt-6 px-6">
                        <h2 className="text-4xl font-semibold text-DarkGrayPrimary pb-4">Dein Account erfolgreich erstellt!</h2>
                        <button
                            onClick={() => navigate('/login')}
                            className="mt-4 uppercase w-3/5 rounded-xl px-3 py-3 text-sm font-semibold bg-bgDarkGrayPrimary text-white shadow-sm">
                            Zum Login
                        </button>
                    </div>
                </div>
            ) : (
                <div className="max-w-xl m-auto px-6 pb-14 mt-6">
                    <h2 className="text-white text-center text-4xl font-semibold">GossipBingo</h2>
                    <div className="bg-bgGrayPrimary rounded-3xl py-8 mt-6 px-6">
                        <h3 className="text-center text-2xl font-semibold">Registrierung</h3>
                        <form onSubmit={handleRegister}>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                    Nutzername
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={username} onChange={(e) => setUsername(e.target.value)}
                                        type="name"
                                        name="username"
                                        id="username"
                                        className="block w-full rounded-md text-center border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                    E-Mail Adresse
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md text-center border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                    Passwort
                                </label>
                                <div className="mt-1">
                                    <input
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="block w-full rounded-md text-center border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="passwordRepear" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                    Passwort Wiederholen
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="passwordRepear"
                                        id="passwordRepear"
                                        className="block w-full rounded-md text-center border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="flex gap-x-4 mt-4 items-center">
                                <input
                                    type="checkbox"
                                    name="agb"
                                    id="agb"
                                    className=""
                                />
                                <label htmlFor="agb" className="text-sm">
                                    Ich habe die AGB sowie Datenschutzbestimmungen gelesen und bin mit diesen Einverstanden.
                                </label>
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    type="submit"
                                    className=" uppercase w-3/5 rounded-xl px-3 py-3 text-sm font-semibold bg-bgDarkGrayPrimary text-white shadow-sm">
                                    Registrieren 🎉
                                </button>
                                <Link to="/login">
                                    <button
                                        className="mt-2 uppercase w-3/5 rounded-xl px-3 py-3 text-sm font-semibold text-DarkGrayPrimary">
                                        Einloggen
                                    </button>
                                </Link>
                            </div>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
