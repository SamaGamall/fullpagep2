import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './API.css';

function API() {
    const [userDataFromApi, setUserDataFromApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Replace this URL by the Real APi URL
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            setUserDataFromApi(res.data)
            setLoading(false);
        })
        .catch(() => {
            setError("dData Not Found")
        })
    }, [])



    return (
        <div>
            {/* Asking if there is loading */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    {/* Show The Data From The Fake API 
                    -----------------------------------*/}
                    {userDataFromApi.map((user) => (
                        <div  className='user-data'>
                            <p className='api-user-name' key={user.id}>User ID : {user.id}</p>
                            <p className='api-user-description' key={user.id}>Post : {user.body}</p>
                        </div>
                        
                    ))}

                    {/* Show The Data From The Real API 
                    -----------------------------------*/}
                    {/* {userDataFromApi.map((user) => (
                        <div className='user-data'>
                            <p className='api-user-name' key={user.phone}>{user.name}</p>
                            <p className='api-user-description' key={user.phone}>{user.details}</p>
                            <p key={user.phone}>{user.date}</p>
                            <p key={user.phone}>{user.blood}</p>
                            <p key={user.phone}>{user.quantity}</p>
                            <p key={user.phone}>{user.phone}</p>
                            <p key={user.phone}>{user.location}</p>
                        </div>
                    ))} */}
                </div>
            )}
        </div>
    );
}
export default API;