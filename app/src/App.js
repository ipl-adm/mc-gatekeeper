import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Application from './components/Application'
import CheckStatus from './components/CheckStatus'
import AdminAction from './components/AdminAction'
import Dashboard from './components/Dashboard/Dashboard'
import { loadReCaptcha } from 'react-recaptcha-google'

class App extends React.Component  {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/status/:id" exact component={CheckStatus}>
            </Route>
            <Route path="/action/:id" exact component={AdminAction}>
            </Route>
            <Route path="/dashboard" exact component={Dashboard}>
            </Route>
            <Route path="/">
              <Application></Application>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
