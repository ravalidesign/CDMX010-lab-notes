import "./App.css";
import React from "react";
import { Print } from "./Components/Content/Print";
import { Navbar } from "./Components/Content/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Print />
    </div>
  );
}

export default App;
