import React, { useState } from 'react';
import LeftBar from '../parts/LeftBar';
import TopBar from '../parts/TopBar';
import Logo from '../../images/account3.png';

function AddDepartment(props) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.position_title.value);
    const { position_title, min_salary, max_salary, shift } = event.target;
    fetch('http://localhost:3000/api/addPosition', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        position_title: position_title.value,
        min_salary: min_salary.value,
        max_salary: max_salary.value,
        shift: shift.value,
      }),
    })
      .then((res) => res.json())
      .then((response) => setMessage(response.message))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <section className="Dashboard" id="dashboard">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              overflowY: 'scroll',
              overflowY: 'hidden',
            }}
          >
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
                      <form
                        onSubmit={(event) => handleSubmit(event)}
                        action="post"
                        className="register-form validate-form"
                      >
                        <span className="register-form-title">
                          Add New Position
                        </span>
                        <p style={{ fontSize: '15px' }}>{message}</p>
                        <div className="wrap-input">
                          <input
                            va
                            className="input"
                            type="text"
                            name="position_title"
                            placeholder="Enter Position Title"
                            required
                          />
                        </div>
                        <div className="wrap-input">
                          <input
                            va
                            className="input"
                            type="text"
                            name="min_salary"
                            placeholder="Enter minimum salary"
                            required
                          />
                        </div>
                        <div className="wrap-input">
                          <input
                            className="input"
                            type="text"
                            name="max_salary"
                            placeholder="Enter Maximum Salary"
                          />
                        </div>
                        <div className="wrap-input">
                          <input
                            className="input"
                            type="text"
                            name="shift"
                            placeholder="Enter Shift"
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
    </div>
  );
}

export default AddDepartment;
