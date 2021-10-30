const express = require('express');
const cors = require('cors');
require('dotenv').config();
// can be set also like this by creating a config.env file
// require('dotenv').config({path: './config.env'}); 

const port = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());

//employee middleware
app.use(require('./routes/emp-controller'));

// listen on port
app.listen(port, () => {
    // connect to database when server starts
    require('./db/conn');
    console.log(`server is running on port ${port}`);
});