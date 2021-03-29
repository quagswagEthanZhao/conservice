import React from 'react';
import LeftBar from '../parts/LeftBar';
import TopBar from '../parts/TopBar';
import List from '../forms/ListAdmin';

function AdminPage(props) {
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
              <List />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
