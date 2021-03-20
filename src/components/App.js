import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dash from './Dash/Dash';
import ReportDash from './reportDash/ReportDash';
import Edit from './forms/Edit';
import AddNew from './forms/AddNew';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/report" component={ReportDash} />
          <Route path="/addNew" component={AddNew} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
