import React from 'react';
import { Link } from 'react-router-dom';

const AuthLandingPage = () => {
    return (
        <div className="bg-bgDarkGrayPrimary">
            <div className="max-w-xl m-auto h-screen relative bg-[url('')] bg-cover bg-center">
                <div className="bg-[#BADBFC] rounded-t-3xl pt-6 px-6 absolute bottom-0 w-full">
                    <h2 className="text-3xl font-semibold uppercase">Expect the<br />
                        unexpected,<br />
                        mark the moment
                    </h2>
                    <div className="mt-6 mb-6">
                        <Link to="">
                            <button
                                className="uppercase w-full rounded-xl bg-bgDarkGrayPrimary px-3 py-3 text-md font-semibold text-white shadow-sm">
                                Anmelden
                            </button>
                        </Link>
                        <Link to="">
                            <button
                                className="uppercase w-full rounded-xl px-3 py-3 text-md font-semibold text-DarkGrayPrimary">
                                Log In
                            </button>
                        </Link>
                        <div className="flex justify-center gap-x-2 items-center text-sm opacity-60 mt-4">
                            <Link to="">
                                <button
                                    className="">
                                    Impressum
                                </button>
                            </Link>
                            <span>|</span>
                            <Link to="">
                                <button
                                    className="">
                                    Datenschmutz
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLandingPage;
