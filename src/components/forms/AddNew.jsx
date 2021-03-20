import React, { useState } from 'react';
import LeftBar from '../parts/LeftBar';
import Logo from '../../images/account3.png';

function AddNew(props) {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <section className="Dashboard" id="dashboard">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', height: '100%', overflowY: 'scroll' }}>
          <LeftBar />
          <div className="panel">
            <div className="panel__container">
              <section className="limiter">
                <div className="constainer-register">
                  <div className="wrap-register">
                    <div className="register-pic js-tilt" data-title="">
                      <img
                        style={{
                          borderRadius: '200px',
                          marginLeft: '80px',
                        }}
                        src={Logo}
                        alt="Login Img"
                      />
                    </div>
                    <form className="register-form validate-form">
                      <span className="register-form-title">
                        Edit Information
                      </span>
                      {errorMessage === '' ? <div /> : <h3>{errorMessage}</h3>}
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter Phone Number"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="position"
                          placeholder="Enter Position"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="department"
                          placeholder="Enter Department"
                          required
                        />
                      </div>
                      <div
                        className="wrap-input"
                        data-validate="Password is required"
                      >
                        <input
                          className="input"
                          type="text"
                          name="startingDate"
                          placeholder="Enter Starting Date"
                          required
                        />
                      </div>
                      <div
                        className="wrap-input"
                        data-validate="Password is required"
                      >
                        <input
                          className="input"
                          type="text"
                          name="endDate"
                          placeholder="Enter End Date"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="employmentStatu"
                          placeholder="Enter Statu"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          va
                          className="input"
                          type="text"
                          name="shift"
                          placeholder="Enter Shift"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="Manager"
                          placeholder="Enter Manager"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          className="input"
                          type="text"
                          name="favColor"
                          placeholder="Enter color"
                          required
                        />
                      </div>
                      <div className="container-register-form-btn">
                        <button type="submit" className="register-form-btn">
                          Submite
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNew;
