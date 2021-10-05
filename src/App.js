import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/Home"/>
        </Route>
        <Route exact path="/Home">
          <Login/>
        </Route>
        <Route exact path="/Signup">
          <Signup/>
        </Route>
      </Router>
   );
  }
}

export default App;
