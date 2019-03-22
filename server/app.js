require('dotenv').config();

const cors = require('cors');
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');
const dataService = require('./services/databaseService.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Oirigin, Content-Type, X-Auth-Token");
    next();
})

app.get('/', (req,res) => {
    res.send('hello');
})

// router
app.use('/profile', require('./controllers/profileController'));


app.listen(8080);