import React from 'react';
import notFoundGif from './../images/gifs/giphy-waiting.gif'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-bgDarkGrayPrimary h-screen pt-20 flex justify-center px-6 md:px-0">
            <div className="">
                <img src={notFoundGif} alt="GIF eines wartenden Hundes" className="rounded-lg"/>
                <div className="text-center text-white mt-6">
                    <h1 className="text-white font-bold text-xl">404 - Seite nicht gefunden</h1>
                    <p>Die angeforderte Seite existiert nicht.</p>
                </div>
                <div className="text-center mt-4">
                    <Link to="/">
                        <button
                            className="uppercase rounded-xl bg-white px-6 py-3 text-sm font-medium text-DarkGrayPrimary shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition">
                            Zurück zum Start
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;