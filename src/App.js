import './App.css';
import Home from './home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import Ticket from './ticketbook/Ticket';
import Allmoviedetails from './home/Cards/Allmoviedetails';
function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route path='/Home' exact>
            <Home />
          </Route>
          <Route path='/Login' exact>
            <Login />
          </Route>
          <Route path='/Register' exact>
            <Register />
          </Route>
          <Route path='/Allmoviedetails' exact>
            <Allmoviedetails />
          </Route>
          <Route path='/Ticket' exact>
            <Ticket />
          </Route>
        </Switch>
        
      </div>

    </Router>
  );
}

export default App;
