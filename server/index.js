// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Fuck NPM, Yarn works so... Yarn FTW!" });
});

name = "";

app.use(express.json())

app.post("/", (req, res) => {
    var name = req.body;
    console.log("Uhm I guess a name will show up here? ", name);
    res.send(req.body)
});
    
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
