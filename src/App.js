import './App.css';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Modal } from "./Components/Content/Modal"
import { Print } from "./Components/Content/Print"
import { Navbar } from "./Components/Content/Navbar"
import crearnota from './assets/crearnota.png';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/wall">
          <div className="App">

            <Navbar />
            <Modal />
            <button className="createNote"><a href="#miModal"> <img src={crearnota} alt="crearnota" /></a></button>
            <div className="impNotes">
              <h2>Historial de tus notas </h2>
              <Print />
            </div>
          </div>
        </Route>

        <Route path="/">
          Estas en inicio 
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
