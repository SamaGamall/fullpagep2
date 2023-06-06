import React, { useRef, useState } from 'react';
import './editeprofile.css';

const Editeprofile = () => {
  const fileInputRef = useRef(null);
  const [fullName, setFullName] = useState('Yuki Hayashi');
  const [email, setEmail] = useState('yuki@Maxwell.com');
  const [updatedFullName, setUpdatedFullName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');

  const handleEditPhoto = () => {
    fileInputRef.current.click();
  };

  const handleFullNameChange = (e) => {
    setUpdatedFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUpdatedEmail(e.target.value);
  };

  const handleUpdate = () => {
    if (updatedFullName !== '') {
      setFullName(updatedFullName);
    }
    if (updatedEmail !== '') {
      setEmail(updatedEmail);
    }
    setUpdatedFullName('');
    setUpdatedEmail('');
  };

  return (
    <div className="container1-2" style={{ overflow: 'hidden' }}>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card3 h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Maxwell Admin"
                      onClick={handleEditPhoto}
                      style={{ cursor: 'pointer' }}
                    />
                    <div className="edit-photo">
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="photo"
                        accept="image/*"
                        style={{ display: 'none' }}
                      />
                      <label htmlFor="photo">Edit</label>
                    </div>
                  </div>
                  <h5 className="user-name">{fullName}</h5>
                  <h6 className="user-email">{email}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card3 h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                      value={updatedFullName}
                      onChange={handleFullNameChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                      value={updatedEmail}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="blood">BloodType</label>
                    <input
                      type="text"
                      className="form-control"
                      id="blood"
                      placeholder="Enter blood type"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Street">Street</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Street"
                      placeholder="Enter Street"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="ciTy">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ciTy"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="sTate">State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sTate"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button
                      type="button"
                      id="cancel"
                      name="cancel"
                      className="btn6"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn6"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
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

export default Editeprofile;
