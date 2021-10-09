// client/src/App.js

import React from "react";
import TDList from "./TDList"


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
      <TDList />
    </div>
  );
}

export default App;