import "./App.css";
import "./SignUp.css";
import "./LogIn.css";
import React, { useEffect, useState } from "react";
import { Print } from "./Components/Content/Print";
import { Navbar } from "./Components/Content/Navbar";
import { SignUp } from "./Components/SignUp/SignUp"
import { LogIn } from "./Components/login/LogIn"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  

} from 'react-router-dom'

import { auth } from './firebase'

function App() {


  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

  }, [])

  return (

    <div>
      {user !== null ? (
        <Router>
          <Switch>

            <Route path="/wall">
              <div className="App">
                <Navbar user={user} />
                <Print />
              </div>
            </Route>

            <Route path="/SignUp">
              <div className="signUp">
                <SignUp />
              </div>
            </Route>

            <Route path="/" exact>
              <div className="LogIn" >
                <LogIn user={user}/>
              </div>
            </Route>
          </Switch>
        </Router>
      ) : <p> Cargando ....</p>
      }

    </div>

  );
}

export default App;
