import React from "react";
import CSS from "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div id="home">
        <p id="video">Videos</p>
        <input placeholder="insert URL here"></input>
        <label className="form-label" htmlFor="form1" >   
        </label>
        <p id="or">or</p>
        <div id="upload">
          <p id="uploadtext">Upload</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
