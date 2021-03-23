import React, { useState, useEffect, useRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SortIcon from '@material-ui/icons/Sort';
import { Link } from 'react-router-dom';
import './List.css';
import { Fragment } from 'react';
import test from '../../images/logo.jpg';

function List(props) {
  const [members, setMembers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortColum, setSortColum] = useState('');
  const [checkbox, setCheckBox] = useState(true);
  const membersPerPage = 15;
  const pagesVisited = pageNumber * membersPerPage;
  const displayMembers = members.slice(
    pagesVisited,
    pagesVisited + membersPerPage
  );
  const pageCount = Math.ceil(members.length / membersPerPage);
  const editButton = useRef();
  useEffect(() => {
    fetch('http://localhost:3000/api/getAll')
      .then((res) => res.json())
      .then((resoult) => {
        setMembers(resoult);
      });
  }, []);

  const handleCheckBox = (event, id) => {
    checkbox ? setCheckBox(false) : setCheckBox(true);
  };

  const handleSort = (arr) => {
    const sortedEmployees = [...arr];
    if (sortedEmployees !== null) {
      sortedEmployees.sort((a, b) => (a[sortColum] > b[sortColum] ? 1 : -1));
    }
    return sortedEmployees;
  };

  const handleClick = (member) => {
    const filtered = members.filter((m) => m.em_id !== member.em_id);
    setMembers(filtered);
    fetch(`http://localhost:3000/delete/${member.em_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (members.length === 0)
    return (
      <p style={{ color: 'black', fontSize: 'Large' }}>
        There are no employee Data in record
      </p>
    );
  return (
    <Fragment>
      <p style={{ color: 'black', fontSize: 'Large' }}>
        Showing {members.length} employees record in database
      </p>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th onClick={() => setSortColum('em_id')}>Id</th>
            <th>Photo</th>
            <th onClick={() => setSortColum('name')}>Name</th>
            <th onClick={() => setSortColum('address')}>Address</th>
            <th onClick={() => setSortColum('email')}>Email</th>
            <th onClick={() => setSortColum('phone')}>Phone Number</th>
            <th onClick={() => setSortColum('job')}>Position</th>
            <th onClick={() => setSortColum('department_name')}>Department</th>
            <th onClick={() => setSortColum('start_date')}>Start Date</th>
            <th onClick={() => setSortColum('shift')}>Shift</th>
            <th onClick={() => setSortColum('fav_color')}>Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {handleSort(displayMembers).map((m) => (
            <tr key={m.em_id}>
              <td>{m.em_id}</td>
              <td>
                <img
                  style={{ height: 50, width: 50, borderRadius: '35px' }}
                  src={test}
                  alt="not find"
                />
              </td>
              <td>{m.name}</td>
              <td>{m.address}</td>
              <td>{m.email}</td>
              <td>{m.phone}</td>
              <td>{m.job_title}</td>
              <td>{m.department_name}</td>
              <td>{m.start_date}</td>
              <td>{m.shift}</td>
              <td>{m.fav_color}</td>
              <td>
                <Link to={`/edit/${m.em_id}`}>
                  <EditIcon
                    id={editButton}
                    className="editIcon"
                    fontSize="medium"
                  />
                </Link>
                <DeleteIcon
                  className="deleteIcon"
                  fontSize="medium"
                  onClick={() => handleClick(m)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={<ArrowBackIosIcon />}
        nextLabel={<ArrowForwardIosIcon />}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'previousBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </Fragment>
  );
}

export default List;
