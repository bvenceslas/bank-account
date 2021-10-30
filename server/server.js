const express = require('express');
const cors = require('cors');
// require('dotenv').config();
require('dotenv').config({path: './config.env'}); // can be set also like this

const port = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());

//employee middleware
app.use(require('./routes/record'));

// get driver connection
const dbo = require('./db/conn');

// listen on port
app.listen(port, () => {
    // connect to database ehrn server starts
    dbo.connectToServer(function(err){
        if(err) console.error(err);
    });
    console.log(`server is running on port ${port}`);
});