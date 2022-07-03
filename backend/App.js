//require express to build an express application
const express = require("express");

//create a variable to store our express methods
const app = express();

//create a variable that stores our port number
const port = 3000;

//listen to the request/response cycle
app.listen(port, ()=> {
    console.log (`server started on port ${port}`);
})