import React, { useState, useEffect, useRef } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './List.css';
import { Fragment } from 'react';
import test from '../../images/logo.jpg';

/*
 <th>Phone Number</th>
          <th>Position</th>
          <th>Department</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Employment Status</th>
          <th>Shift</th>
          <th>Manager</th>
          <th>Photo</th>
          <th>Color</th>
*/

const fakeData = [
  {
    id: 1,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 2,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 3,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 4,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 5,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 6,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 7,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 8,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 9,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 10,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 11,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 12,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 13,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 14,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 15,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 16,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 17,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 18,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 19,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 20,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 21,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 22,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 23,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 24,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
  {
    id: 25,
    name: 'Ethan',
    department: 'IT',
    startingDate: '2021-5-10',
  },
];

function List(props) {
  const [members, setMembers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const membersPerPage = 15;
  const pagesVisited = pageNumber * membersPerPage;
  const displayMembers = members.slice(
    pagesVisited,
    pagesVisited + membersPerPage
  );
  const pageCount = Math.ceil(members.length / membersPerPage);
  const editButton = useRef();

  useEffect(() => {
    setMembers(fakeData);
  }, []);

  const handleClick = (member) => {
    const filtered = members.filter((m) => m.id !== member.id);
    setMembers(filtered);
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
        Showing {members.length} employee record in database
      </p>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Department</th>
            <th>Start Date</th>
            <th>Employment Status</th>
            <th>Shift</th>
            <th>Manager</th>
            <th>Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayMembers.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>
                <img
                  style={{ height: 50, width: 50, borderRadius: '35px' }}
                  src={test}
                  alt="not find"
                />
              </td>
              <td>{m.name}</td>
              <td>{m.department}</td>
              <td>{m.startingDate}</td>
              <td>53535652356253</td>
              <td>Hejisjlfs</td>
              <td>conser</td>
              <td>3023933293923</td>
              <td>Status</td>
              <td>303-3939933</td>
              <td>Hfjiefsl</td>
              <td>red</td>
              <td>
                <Link to={`/edit/${m.id}`}>
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
