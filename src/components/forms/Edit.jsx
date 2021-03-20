import React, { useState } from 'react';
import TopBar from '../parts/TopBar';
import LeftBar from '../parts/LeftBar';
import test from '../../images/account3.png';

function Edit(props) {
  const [errorMessage, serErrorMessage] = useState('');
  const id = props.location.pathname.split('/')[2];
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
            <TopBar />
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
                        src={test}
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
                          value="Ethan Zhao"
                          className="input"
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="313E 86868N LOGAN UT"
                          className="input"
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="ehisfsfj@gmail.com"
                          className="input"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="163647484884"
                          className="input"
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter Phone Number"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="Manager"
                          className="input"
                          type="text"
                          name="position"
                          placeholder="Enter Position"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="IT"
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
                          value="2021-5-10"
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
                          value="N/A"
                          className="input"
                          type="text"
                          name="endDate"
                          placeholder="Enter End Date"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="hired"
                          className="input"
                          type="text"
                          name="employmentStatu"
                          placeholder="Enter Statu"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="9:00 - 5:00"
                          className="input"
                          type="text"
                          name="shift"
                          placeholder="Enter Shift"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          value="Andjfewef"
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

export default Edit;
