import React, { useState } from 'react';
import LeftBar from '../parts/LeftBar';
import Logo from '../../images/account3.png';

function AddDepartment(props) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const department_name = event.target.department_name.value;
    fetch('http://localhost:3000/api/addDepartment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        department_name: department_name,
      }),
    })
      .then(() => setMessage('Department Added !'))
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
                      <form
                        onSubmit={(event) => handleSubmit(event)}
                        action="post"
                        className="register-form validate-form"
                      >
                        <span className="register-form-title">
                          Add New Department
                        </span>
                        <p style={{ fontSize: '15px' }}>{message}</p>
                        <div className="wrap-input">
                          <input
                            className="input"
                            type="text"
                            name="department_name"
                            placeholder="Enter Department Name"
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
