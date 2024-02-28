// UserRoleDiv.js
import React, { useState, useEffect } from 'react';
import api from "../../../../services/api";
import { Link } from 'react-router-dom';

function UserRoleDiv() {
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (userId) {
            api.get(`http://127.0.0.1:8000/api/user-role/${userId}`)
                .then(response => {
                    setUserRole(response.data.role);
                })
                .catch(error => {
                    setError(error);
                });
        }
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (userRole === 0) {
        return <div className="hidden">Das Dashboard kann nur vom Admin eingesehen werden</div>;
    } else if (userRole === 1) {
        return (
            <Link to="/dashboard">
                <div className="bg-[#F87676] rounded-3xl py-6 px-6 mt-4">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h6 className="uppercase text-sm pb-1.5 text-white">Admins haben ein</h6>
                            <h4 className="uppercase text-3xl font-medium text-white">Dashboard</h4>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.728" height="27.275" viewBox="0 0 18.728 27.275">
                                <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-329.749 -449.501)">
                                    <line id="Linie_3" data-name="Linie 3" x2="17.226" y2="12.947" transform="translate(330.5 450.5)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                    <line id="Linie_4" data-name="Linie 4" x2="12.947" y2="17.226" transform="translate(347.726 462.83) rotate(90)" fill="none" stroke="#000" strokeWidth="2.5"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        );
    } else {
        return null;
    }
}

export default UserRoleDiv;
