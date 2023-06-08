import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import './Userprofile.css';
import axios from 'axios';

const Userprofile = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUserProfile(response.data);
        setIsActive(response.data.isActive);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, [id]);

  const handleChange = (event) => {
    setIsActive(event.target.checked);
  };

  return (
    <div className="container1-3" style={{ overflow: 'hidden' }}>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card1-1">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={userProfile.Photo} alt="Admin" className="rounded-circle" width={150} style={{ paddingTop: '1.2rem' }} />
                  <div className="mt-3">
                    <h4>{userProfile.name}</h4>
                    <p className="text-secondary mb-1">{userProfile.role}</p>
                    <p className="text-muted font-size-sm">{userProfile.location}</p>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1, bgcolor: 'background.default' }}>
                      <Chip label={isActive ? 'Active account' : 'Inactive account'} />
                      <Switch checked={isActive} onChange={handleChange} />
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.mobile}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.address && `${userProfile.address.street}, ${userProfile.address.suite}, ${userProfile.address.city}, ${userProfile.address.zipcode}`}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Blood type</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userProfile.bloodType}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <Link className="btn5" to="/editep">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3">
                      <EmojiEventsIcon className="me-2" />
                      Recent Activity
                    </h6>
                    <small>Last login</small>
                    <div className="small text-muted">{new Date().toLocaleString()}</div>
                    <small>Last updated profile</small>
                    <div className="small text-muted">{new Date().toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
