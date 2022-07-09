//import App form App.js
const app = require("./App")

//require mongoose
const mongoose = require("mongoose");

//use our config.env file
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env"
})

//use mongoose to connect to our db
const Mangia = mongoose.connect(process.env.DATABASE).then(()=> {
    console.log("Database is up and running");
});



//create a variable that stores our port number
const port = process.env.PORT || 3001;

//listen to the request/response cycle
app.listen(port, ()=> {
    console.log (`server started on port ${port}`);
})