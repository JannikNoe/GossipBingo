import React, { useState } from 'react';
import PublicHeader from "../../layout/PublicHeaderView";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {useAuth} from "../../../services/AuthContext";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { setIsLoggedIn } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            });
            console.log('Serverantwort:', response);

            if (response.status === 200) {
                console.log('Erfolgreich')
                // Erfolgreicher Login
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userId', response.data.user.id);
                localStorage.setItem('username', response.data.user.username);
                localStorage.setItem('email', response.data.user.email);
                localStorage.setItem('token', response.data.token)
                console.log(response.data)
                // Speichern Sie hier weitere Benutzerinformationen, wenn erforderlich
                navigate('/gameoverview'); // Navigieren zu einer geschützten Seite
            } else {
                setError('Ein Fehler ist aufgetreten');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('E-Mail oder Passwort falsch');
            } else {
                console.log('NEIN NEIN NEIN')
                setError('Ein Fehler ist aufgetreten');
            }
        }
    };


    return (
        <div className="bg-bgDarkGrayPrimary h-screen">
            <div className="px-6 md:px-0">
                <PublicHeader />
            </div>
            <div className="max-w-xl m-auto px-6 pb-14 mt-12">
                <h2 className="text-white text-center text-4xl font-semibold">GossipBingo</h2>
                <div className="bg-bgGrayPrimary rounded-3xl py-8 mt-6 px-6">
                    <h3 className="text-center text-2xl font-semibold">Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md text-center border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Mustermännchen@example.de"
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
                            <Link to="">
                                <p className="text-right text-sm pt-2">Passwort vergessen</p>
                            </Link>
                        </div>
                        <div className="text-center mt-6">
                            <button
                                type="submit"
                                className=" uppercase w-3/5 rounded-xl px-3 py-3 text-sm font-semibold bg-bgDarkGrayPrimary text-white shadow-sm">
                                Einloggen 🎉
                            </button>
                            <Link to="/register">
                                <button
                                    className="mt-2 uppercase w-3/5 rounded-xl px-3 py-3 text-sm font-semibold text-DarkGrayPrimary">
                                    Registrieren
                                </button>
                            </Link>
                        </div>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
