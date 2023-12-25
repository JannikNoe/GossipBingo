import React from 'react';
import PublicHeader from "../../layout/PublicHeaderView";
import {Link} from "react-router-dom";
import GameHeader from "../../layout/GameHeaderView";

const Register = () => {
    return (
        <div className="bg-bgDarkGrayPrimary h-screen">
            <div className="px-6 md:px-0">
                <PublicHeader />
            </div>
            <div className="max-w-xl m-auto px-6 pb-14 mt-6">
                <h2 className="text-white text-center text-4xl font-semibold">GossipBingo</h2>
                <div className="bg-bgGrayPrimary rounded-3xl py-8 mt-6 px-6">
                    <h3 className="text-center text-2xl font-semibold">Registrierung</h3>
                    <form>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                                Nutzername
                            </label>
                            <div className="mt-1">
                                <input
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
                </div>
            </div>
        </div>
    );
};

export default Register;
