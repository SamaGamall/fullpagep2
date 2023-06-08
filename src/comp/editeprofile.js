import React, { useRef, useState } from 'react';
import './editeprofile.css';

const Editeprofile = () => {
  const fileInputRef = useRef(null);
  const [fullName, setFullName] = useState('name');
  const [email, setEmail] = useState('email');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [updatedFullName, setUpdatedFullName] = useState('name');
  const [updatedEmail, setUpdatedEmail] = useState('email');
  const [selectedImage, setSelectedImage] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');

  const handleEditPhoto = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onloadend = function() {
        setSelectedImage(reader.result);
      }
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleFullNameChange = (e) => {
    setUpdatedFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUpdatedEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleBloodTypeChange = (e) => {
    setBloodType(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: updatedFullName,
          email: updatedEmail,
          phone: phone,
          bloodType: bloodType,
          street: street,
          city: city,
          state: state
        }),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        if (updatedFullName !== '') {
          setFullName(updatedFullName);
        }
        if (updatedEmail !== '') {
          setEmail(updatedEmail);
        }
        setUpdatedFullName('');
        setUpdatedEmail('');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
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
                      src={selectedImage}
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
                        onChange={handleImageChange}
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
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="blood">Blood Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="blood"
                      placeholder="Enter blood type"
                      value={bloodType}
                      onChange={handleBloodTypeChange}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="Street">Street</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Street"
                      placeholder="Enter Street"
                      value={street}
                      onChange={handleStreetChange}
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
                      value={city}
                      onChange={handleCityChange}
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
                      value={state}
                      onChange={handleStateChange}
                    />
                  </div>
                </div>
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
