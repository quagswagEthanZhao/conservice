import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dash from './Dash/Dash';
import ReportDash from './reportDash/ReportDash';
import Edit from './forms/Edit';
import AddMember from './forms/AddNew';
import addDepartment from './forms/AddDepartment';
import addPosition from './forms/AddPosition';
import AdminPage from './AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/report" component={ReportDash} />
          <Route path="/adminPage" component={AdminPage} />
          <Route path="/addMember" component={AddMember} />
          <Route path="/addDepartment" component={addDepartment} />
          <Route path="/addposition" component={addPosition} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
