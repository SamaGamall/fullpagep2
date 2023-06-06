import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewAllUsersPage.css';

function ViewAllUsersPage() {
  const [userDataFromApi, setUserDataFromApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setUserDataFromApi(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Data Not Found');
      });
  }, []);

  const handleRequest = (userId) => {
    console.log('Request sent for user:', userId);
    // Implement the logic for making a request here
  };

  return (
    <div className="user-card-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="user-card-grid">
          {userDataFromApi.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-avatar">
                <img src={`https://i.pravatar.cc/100?u=${user.id}`} alt="User Avatar" />
              </div>
              <div className="user-details">
                <p className="user-name">Name: {user.name}</p>
                <p className="user-blood-type">Blood Type: {user.bloodType}</p>
                <button className="request-button" onClick={() => handleRequest(user.id)}>
                  Request
                </button>
                <Link to={`/profile/${user.id}`} className="view-profile-button">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewAllUsersPage;
