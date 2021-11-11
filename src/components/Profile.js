import React, { useContext, useEffect } from 'react'
import userContext from '../Context/User/userContext'

export const Profile = () => {
    const uContext = useContext(userContext);
    const {user, getUserByAuthToken} = uContext;

    useEffect(() => {
        getUserByAuthToken();
        return () => {
            
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2>Profile</h2>
            <h3>{user.username}</h3>
            <div className="name">
                {user.first+ " "+user.last}
            </div>
            <small>{user.city}</small>
        </div>
    )
}
