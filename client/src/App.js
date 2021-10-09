// client/src/App.js

import React from "react";
import "./style/skeleton.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>To Do List</h1>
      </div>
      <form className="form">
        <div className="row">
          <div className="row">
            <label for="name-input">Name</label>
            <input className="half-width" type="text" name="name" /> 
          </div>
          <div className="row">
            <label for="text-input">Task</label>
            <input className="half-width" type="text" name="task" />
          </div>
          <div className="row">
            <input className="button-primary" type="submit" value="Submit" />
          </div>
          <p>{data}</p>
        </div> 
      </form> 
    </div>
  );
}

export default App;