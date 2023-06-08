import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './ViewAllUsersPage.css';

function ViewAllUsersPage() {
  // Define the state variables for storing the user data, loading state, and error state
  const [userDataFromApi, setUserDataFromApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 'useNavigate' and 'useLocation' are hooks from 'react-router-dom' for handling navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // The 'useEffect' hook will run after the first render and fetch user data from the API
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users')
      .then((res) => {
        // When the data is successfully fetched, update the user data state and set loading to false
        setUserDataFromApi(res.data);
        setLoading(false);
      })
      .catch(() => {
        // If an error occurs while fetching the data, set the error state
        setError('Data Not Found');
      });
  }, []); // The empty array means this effect will only run once after the first render

  const handleClick = () => {
    const id = 1; 
    // Navigate to the '/other-page/:id' route when the button is clicked
    navigate(`/profile/${id}`);
  };

  const handleRequest = (userId) => {
    console.log('Request sent for user:', userId);
    // Navigate to the '/request/:id' route when the request button is clicked
    navigate(`/request/${userId}`);
  };

  return (
    // Display loading text if still loading, error text if an error occurred, 
    // otherwise map over the user data and display each user
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
                {/* Make sure 'bloodType' is a property in the returned user object.
                    If not sure, use conditional rendering or provide a default value. */}
                <p className="user-blood-type">Blood Type: {user.bloodType ? user.bloodType : "Not available"}</p>
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
          <button onClick={handleClick}>Go to Other Page</button>
        </div>
      )}
    </div>
  );
}
export default ViewAllUsersPage;
