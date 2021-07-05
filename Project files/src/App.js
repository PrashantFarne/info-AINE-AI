import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";

function App() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-1">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-11">
          <footer></footer>
          <Home></Home>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
