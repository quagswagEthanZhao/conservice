import React, { useRef, useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

function TopBarTest(props) {
  const [employees, setEmployees] = useState([]);
  const searchBar = useRef();
  const searchResoult = useRef();
  const searchText = useRef();

  useEffect(() => {
    fetch('http://localhost:3000/api/getAll')
      .then((res) => res.json())
      .then((employees) => {
        setEmployees(employees);
      });
  }, []);

  const handleSearchEmployee = () => {
    let userInput = searchText.current.value;
    if (userInput.length === 0) {
      searchResoult.current.style.display = 'none';
      searchResoult.current.innerHTML = '';
    }
    searchResoult.current.innerHTML = '';
    let filtered = [];
    let round = 0;
    for (var i = 0; i < employees.length; i++) {
      let currentEmployee = employees[i].name;
      let currentEmployeeDepartment = employees[i].department_name;
      let currentEmployeeId = employees[i].em_id;
      let filter = searchText.current.value;
      if (round === 5) {
        break;
      }
      if (currentEmployee.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        if (filtered.length > 5) {
          filtered = [];
        }
        filtered.push([
          currentEmployee,
          currentEmployeeDepartment,
          currentEmployeeId,
        ]);
        round++;
      }
    }
    if (filtered.length > 0 && userInput.length > 0) {
      searchResoult.current.style.display = 'flex';
      for (var j = 0; j < filtered.length; j++) {
        let newChild = document.createElement('li');
        newChild.innerHTML = `<a href="/edit/${filtered[j][2]}"><h4>${filtered[j][0]}</h4><h6>${filtered[j][1]}</h6></a>`;
        searchResoult.current.appendChild(newChild);
      }
    }
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center', minWidth: '1260px' }}>
      <div className="topbar">
        <div
          className="topbar__searchbar"
          ref={searchBar}
          id="topbar__searchbar"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              width: '100%',
            }}
          >
            <svg
              className="first"
              enableBackground="new 0 0 250.313 250.313"
              version="1.1"
              viewBox="0 0 250.313 250.313"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m244.19 214.6l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76 10.7-16.231 16.945-35.66 16.945-56.554 0-56.837-46.075-102.91-102.91-102.91s-102.91 46.075-102.91 102.91c0 56.835 46.074 102.91 102.91 102.91 20.895 0 40.323-6.245 56.554-16.945 0.269 0.301 0.47 0.64 0.759 0.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.28-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
            <input
              ref={searchText}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              type="text"
              id="searchBar"
              placeholder="Search by name"
              onFocus={() => {
                searchBar.current.style.boxShadow =
                  '0px 0px 30px 0px rgba(0,0,0,0.10)';
              }}
              onBlur={() => {
                searchBar.current.style.boxShadow = 'none';
              }}
              onKeyUp={() => handleSearchEmployee()}
              autoComplete="off"
            />
          </div>
          <ul className="topbar__results" id="results" ref={searchResoult} />
        </div>
        <div className="addList">
          <Link to="/addMember">
            <div className="topbar__add">
              <AddCircleIcon />
              <h3>Add Member</h3>
            </div>
          </Link>
          <Link to="/addDepartment">
            <div className="topbar__add">
              <AddCircleIcon />
              <h3>Add Department</h3>
            </div>
          </Link>
          <Link to="/addPosition">
            <div className="topbar__add">
              <AddCircleIcon />
              <h3>Add Position</h3>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBarTest;
