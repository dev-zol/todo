// client/src/App.js

import React from "react";
import TDList from "./TDList"
import axios from "axios";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/send")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
      <TDList />
      <div>{data}</div>
    </div>
  );
}

export default App;
