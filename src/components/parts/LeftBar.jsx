import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';

function LeftBar(props) {
  const svg1 = useRef();
  const svg2 = useRef();
  const status = useRef();

  //   useEffect(() => {
  //     fetch(
  //       `https://financialmodelingprep.com/api/v3/is-the-market-open?apikey=${process.env.REACT_APP_API_KEY_1}`
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result.isTheStockMarketOpen) {
  //           status.current.style.color = '#5efad7';
  //         } else {
  //           status.current.style.color = '#eb5887';
  //         }
  //         status.current.innerHTML = result.isTheStockMarketOpen
  //           ? 'Martket Status: Open'
  //           : 'Market Status: Close';
  //       })
  //       .catch((error) => console.log(error));
  //     let section = window.location.href.split('/');
  //     if (section) {
  //       svg1.current.style.fill = '#5eb5f8';
  //     } else {
  //       svg2.current.style.fill = '#5eb5f8';
  //     }
  //   }, []);

  return (
    <aside className="leftbar">
      <img className="leftbar__logo" src={Logo} alt="not find" />
      <ul className="leftbar__menu">
        <Link to="/">
          <li>
            <svg
              ref={svg1}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 24 30"
              xmlSpace="preserve"
              className="leftbar__menulogo"
            >
              <path d="M15.4,23.2H8.8c0,0-0.1,0-0.1,0c-0.4,0-0.8,0-1.2,0c0,0,0,0,0,0c-0.8,0-1.2,0-1.7-0.1c-1.8-0.4-3.3-1.9-3.7-3.7  C2,18.8,2,18.2,2,16.7v-4.4c0-1.4,0-2.4,0.1-3.2c0.1-0.9,0.2-1.5,0.5-2c0-0.1,0.1-0.2,0.1-0.3c0.3-0.5,0.8-1,1.5-1.4  C4.9,4.9,5.8,4.4,7,3.8l3.1-1.7c0.5-0.3,0.9-0.5,1.1-0.6c0.6-0.3,1-0.3,1.6,0c0.3,0.1,0.6,0.3,1.1,0.6l2.9,1.6  c1.2,0.7,2.2,1.2,2.9,1.7c0.8,0.5,1.2,1,1.5,1.6c0.3,0.6,0.5,1.2,0.6,2.1C22,9.9,22,11,22,12.4v4.3c0,1.5,0,2.1-0.1,2.7  c-0.4,1.8-1.9,3.3-3.7,3.7c-0.4,0.1-0.9,0.1-1.7,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.4,0-0.8,0C15.5,23.2,15.4,23.2,15.4,23.2z M16.4,21.3  c0,0,0.1,0,0.1,0l0,0c0.7,0,1,0,1.2-0.1c1.1-0.3,2-1.1,2.2-2.2c0.1-0.3,0.1-0.9,0.1-2.2v-4.3c0-1.4,0-2.4-0.1-3.2  c-0.1-0.8-0.2-1.1-0.3-1.3c-0.1-0.2-0.3-0.5-1-0.9c-0.6-0.4-1.6-1-2.7-1.6L13,3.8c-0.5-0.3-0.7-0.4-1-0.5c0,0,0,0,0,0c0,0,0,0,0,0  c-0.2,0.1-0.5,0.3-1,0.5L8,5.5C6.8,6.2,6,6.6,5.4,7C4.8,7.4,4.6,7.7,4.5,7.9c0,0-0.1,0.1-0.1,0.2C4.3,8.3,4.1,8.6,4.1,9.3  C4,10,4,11,4,12.3v4.4c0,1.3,0,1.9,0.1,2.2c0.3,1.1,1.1,2,2.2,2.2c0.2,0.1,0.5,0.1,1.2,0.1c0.1,0,0.2,0,0.3,0v-6.7c0-0.6,0.4-1,1-1  h6.5c0.6,0,1,0.4,1,1V21.3z M9.8,15.5v5.7c2,0,3.5,0,4.5,0v-5.7H9.8z" />
            </svg>
          </li>
        </Link>
        <Link to="/report">
          <li>
            <svg
              ref={svg2}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0.5 24.5 24 30"
              xmlSpace="preserve"
              className="leftbar__menulogo"
            >
              <g>
                <path d="M10.5,24.5c-5.523,0-10,4.478-10,10s4.478,10,10,10v-10h10C20.5,28.978,16.022,24.5,10.5,24.5z M8.5,34.5v7.747   c-3.447-0.891-6-4.026-6-7.747c0-4.411,3.589-8,8-8c3.721,0,6.856,2.554,7.747,6H10.5C9.396,32.5,8.5,33.396,8.5,34.5z" />
                <path d="M12.5,36.5v10c5.522,0,10-4.478,10-10H12.5z" />
              </g>
            </svg>
          </li>
        </Link>
        <li>
          <svg
            className="leftbar__menulogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fillRule="nonzero"
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
              />
            </g>
          </svg>
        </li>
      </ul>

      <h5 className="leftbar__panel__status" id="panel__status" ref={status}>
        {''}
      </h5>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="leftbar__log"
        viewBox="0 0 24 24"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
        </g>
      </svg>
    </aside>
  );
}

export default LeftBar;
