Params handle

const express = require("express");
const app = express();

app.get("/user/:id", (req, res) =>{
    res.send(`Hello ${req.params.id}`);
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});


//Query

const express = require("express");
const app = express();

//Params
app.get("/student/:id", (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

//Query
app.get("students", (req, res) => {
    const { class: cls, section } = req.query;
    res.send(`Class: ${cls}, Section: ${section}`);
});

app.listen(8000);

