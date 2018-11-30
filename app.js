const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public/project/dist/project')));
app.use(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    // next();
});

app.use('/api',route);




app.listen(port,()=>{
    console.log("Server started");
})


