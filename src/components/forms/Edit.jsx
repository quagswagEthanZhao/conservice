import React, { useState, useEffect, useRef } from 'react';
import TopBar from '../parts/TopBar';
import LeftBar from '../parts/LeftBar';
import test from '../../images/account3.png';
function Edit(props) {
  const [employee, setEmployee] = useState({});
  const [manager, setManager] = useState({});
  const [Message, setMessage] = useState('');
  const [checkbox, setCheckBox] = useState(true);
  const [checkResoult, setCheckResoult] = useState(null);
  const checkBoxInfo = useRef();
  const id = props.location.pathname.split('/')[2];

  useEffect(() => {
    fetch('http://localhost:3000/api/getAll')
      .then((res) => res.json())
      .then((response) => {
        const em_info = response.filter((m) => m.em_id == id)[0];
        setEmployee(em_info);
      })
      .catch((error) => error.message);
    fetch(`http://localhost:3000/api/getManagerId/${id}`)
      .then((res) => res.json())
      .then((response) => setManager(response))
      .catch((error) => console.log(error.message));
  }, []);

  const handleCheckBox = () => {
    checkbox ? setCheckBox(false) : setCheckBox(true);
    const terminated = checkBoxInfo.current.checked;
    setCheckResoult(terminated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      address,
      email,
      phoneNumber,
      position,
      department,
      startingDate,
      endDate,
      shift,
      manager,
      favColor,
    } = event.target;

    fetch(`http://localhost:3000/api/updateInfo/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        address: address.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        position: position.value,
        department: department.value,
        startingDate: startingDate.value,
        manager: manager.value,
        endDate: endDate.value ? endDate.value : null,
        shift: shift.value,

        favColor: favColor.value,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setMessage('Info Saved!');
      });
    fetch(`http://localhost:3000/api/terminate/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        terminate: checkResoult === null ? false : checkResoult,
      }),
    }).then(() => setMessage(`Info Saved !`));
  };

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
                    <form
                      action="put"
                      onSubmit={(event) => handleSubmit(event)}
                      className="register-form validate-form"
                    >
                      <span className="register-form-title">
                        Edit Information
                      </span>
                      <p style={{ fontSize: '15px' }}>{Message}</p>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.name}
                          className="input"
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.address}
                          className="input"
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.email}
                          className="input"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.phone}
                          className="input"
                          type="text"
                          name="phoneNumber"
                          placeholder="Enter Phone Number"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.job_title}
                          className="input"
                          type="text"
                          name="position"
                          placeholder="Enter Position"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.department_name}
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
                          defaultValue={employee.start_date}
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
                          defaultValue="N/A"
                          className="input"
                          type="text"
                          name="endDate"
                          placeholder="Enter End Date"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue="hired"
                          className="input"
                          type="text"
                          name="employmentStatu"
                          placeholder="Enter Statu"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.shift}
                          className="input"
                          type="text"
                          name="shift"
                          placeholder="Enter Shift"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={manager.info}
                          className="input"
                          type="text"
                          name="manager"
                          placeholder="Enter Manager"
                          required
                        />
                      </div>
                      <div className="wrap-input">
                        <input
                          defaultValue={employee.fav_color}
                          className="input"
                          type="text"
                          name="favColor"
                          placeholder="Enter color"
                          required
                        />
                      </div>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyItems: 'center',
                        }}
                      >
                        <p style={{ fontSize: '20px', marginRight: '20px' }}>
                          terminate
                        </p>
                        <input
                          ref={checkBoxInfo}
                          onChange={() => handleCheckBox()}
                          checked={employee.terminated === checkbox}
                          type="checkbox"
                        />
                      </span>
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
