const express = require('express');
const app = express();

app.use(express.json());

//Dummy data
let users = [
    { id: 1, name: "Deepak" },
    { id: 2, name: "rahul" },
    { id: 3, name: "Ank"},
];

//GET data fetch
app.get('/users', (req, res) => {
    res.send("All users data");
});

//POST new data create
app.post('/users', (req, res) => {
    const userData = req.body;
    console.log("Received:", userData);
    res.send({
        message: "User created successfully",
         "data": userData
    });
});

//PUT full update
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const newData = req.body;
    
    users = users.map(user => 
        user.id === userId ? { id: userId, ...newData } : user
    );
    res.send({
        message: `User ${userId} fully updated`,
        users: users
    });

});


//PATCH partial update
app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updates = req.body;

    users = users.map(user =>
        user.id === userId ? { ...user, ...updates }  : user
    );
    res.send({
        message: `User ${userId} partially updated`,
        users: users
    });
});

//DELETE remove data
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    users = users.filter(user => user.id !== userId);
    res.send({
        message: `User ${userId} deleted`,
        users: users
    });
});
app.listen(8000, () => {
    console.log("Server running on port 8000");
});