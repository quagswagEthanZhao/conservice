import React, { Fragment, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import test from '../../images/logo.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import './List.css';

function ListAdmin(props) {
  const [members, setMembers] = useState([]);
  const [sortColum, setSortColum] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const membersPerPage = 15;
  const pagesVisited = pageNumber * membersPerPage;
  const handleSort = (arr) => {
    const sortedEmployees = [...arr];
    if (sortedEmployees !== null) {
      sortedEmployees.sort((a, b) => (a[sortColum] > b[sortColum] ? 1 : -1));
    }
    return sortedEmployees;
  };
  const displayMembers = handleSort(members).slice(
    pagesVisited,
    pagesVisited + membersPerPage
  );
  const pageCount = Math.ceil(members.length / membersPerPage);

  useEffect(() => {
    fetch('http://localhost:3000/api/getAdminInfo')
      .then((res) => res.json())
      .then((response) => {
        setMembers(response.info);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Photo</th>
            <th onClick={() => setSortColum('name')}>Name</th>
            <th onClick={() => setSortColum('is_admin')}>Admin</th>
          </tr>
        </thead>
        <tbody>
          {displayMembers.map((m) => (
            <tr key={m.name}>
              <td>
                <img
                  style={{ height: 50, width: 50, borderRadius: '35px' }}
                  src={test}
                  alt="not find"
                />
              </td>
              <td>{m.name}</td>
              <td>{m.is_admin ? <CheckIcon /> : <CloseIcon />}</td>
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

export default ListAdmin;
