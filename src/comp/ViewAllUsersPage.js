import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './ViewAllUsersPage.css';

function ViewAllUsersPage() {
  const [userDataFromApi, setUserDataFromApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUserDataFromApi(res.data); // Assuming the returned data is an array of user objects
        setLoading(false);
      })
      .catch(() => {
        setError('Data Not Found');
      });
  }, []);

  const handleRequest = (userId) => {
    console.log('Request sent for user:', userId);
    // Add logic to handle the request as needed

    // Navigate to the request page
    navigate(`/request/${userId}`);
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
                <Link
  to={`/profile/${user.id}`}
  state={{ from: location.pathname, userId: user.id }}
  className="view-profile-button"
>
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
