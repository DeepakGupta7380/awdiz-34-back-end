const express = require('express');
const app = express();

app.get('/deepak', (req, res) => {
    res.send('Deepak Gupta');
});

app.get('/about', (req, res) => {
    res.send('This is a About Page');
})

app.get('/contact', (req, res) => {
    res.send('Contact page');
})

app.listen(3000, () => {
    console.log('Server running');
});