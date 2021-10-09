// client/src/App.js

import React from "react";
import "./styles/normalize.css"
import "./styles/skeleton.css"

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
        <form className="form">
          <label>
            Name: 
            <input type="text" name="name" />
          </label>
          <label>
            Task: 
            <input type="text" name="task" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{data}</p>
      </div>  
    </div>
  );
}

export default App;