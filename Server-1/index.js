const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    console.log('Server started on port 3000');
})

app.get('/about', (req, res)=> {
    res.send("This is the about page");
})