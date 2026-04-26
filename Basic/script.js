// const express = require('express');
// const app = express();

// //middleware
// app.use((req, res, next) => {
//     console.log("MiddleWare executed");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second middleware");
//     next();
// })

// //route
// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// });


// const express = require('express');
// const app = express();

// //middleWare (auth check)
// const checkAuth = (req, res, next) => {
//     const isLoggedIn = true;

//     if(isLoggedIn){
//         next();
//     }else{
//         res.send("Unauthorized");
//     }
// };

// //route with middleware
// app.get('/dashboard', checkAuth, (req, res) => {
//     res.send("Welcome to Dashboard");
// });

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// });


const express = require('express');
const app = express();

app.use(express.json());

//middleware 1: Auth check
const checkAuth = (req, res, next) => {
    console.log("Auth Middleware");

    const isLoggedIn = true;

    if(isLoggedIn){
        next();
    }else{
        res.send("Unauthorized");
    }
};

//middleware 2:
const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
};

//Routes
//GET fetch data
app.get('/users', logger, checkAuth, (req, res) => {
    res.send("All users data");
});

//POST - create data
app.post('/users', logger, checkAuth, (req, res) => {
    res.send({
        message: "User created",
        data: req.body
    });
});

//PUT - full update
app.put('/users/:id', logger, checkAuth, (req, res) => {
    res.send(`User ${req.params.id} fully updated`);
});

//PATCH - partial update
app.patch('/users/:id', logger, checkAuth, (req, res) => {
    res.send(`User ${req.params.id} partial updated`);
});

//DELETE - remove
app.delete('/users/:id', logger, checkAuth, (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

app.listen(8000, () => {
    console.log("Server running on port 8000")
});
