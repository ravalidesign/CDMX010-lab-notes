import "./App.css";
import "./SignUp.css";
import "./LogIn.css";
import React from "react";
import { Print } from "./Components/Content/Print";
import { Navbar } from "./Components/Content/Navbar";
import { SignUp } from "./Components/SignUp/SignUp"
import { LogIn } from "./Components/login/LogIn"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {

  return (


    <Router>
      <Switch>

        <Route path="/wall">
          <div className="App">
            <Navbar />
            <Print />
          </div>
        </Route>

        <Route path="/SignUp">
          <div className="signUp">
            <SignUp />
          </div>
        </Route>

        <Route path="/">
          <div className="LogIn" >
          <LogIn />
          </div>
          

        </Route>



      </Switch>




    </Router>

  );
}

export default App;
