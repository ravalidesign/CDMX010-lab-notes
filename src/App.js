import "./App.css";
import React from "react";
import { Print } from "./Components/Content/Print";
import { Navbar } from "./Components/Content/Navbar";
import { SignUp } from "./Components/SignUp/SignUp"
import { LogIn } from "./Components/login/LogIn"
import {BrowserRouter as Router,
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
          <SignUp />


        </Route>

        <Route path="/">
          <LogIn />

        </Route>



      </Switch>




    </Router>

  );
}

export default App;
