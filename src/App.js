import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { initializeApp } from "firebase/app";
import Home from "./pages/home";
import Login from './pages/login';
import Signup from './pages/signup';


const firebaseConfig = {
  apiKey: "AIzaSyDrEcpHGpjHJjuPkhH2sVTXVjcTHIK2AKM",
  authDomain: "studentreport-dev-udhayakumar.firebaseapp.com",
  projectId: "studentreport-dev-udhayakumar",
  storageBucket: "studentreport-dev-udhayakumar.appspot.com",
  messagingSenderId: "415775602826",
  appId: "1:415775602826:web:0fb30f14595372305b5573",
  measurementId: "G-GWSECCZ6HM"
};

initializeApp(firebaseConfig);
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Redirect to="/Login"/>
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route exact path="/Signup">
          <Signup/>
        </Route>
        <Route exact path="/Home">
          <Home/>
        </Route>
      </Router>
   );
  }
}

export default App;
