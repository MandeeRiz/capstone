const app = require("./App")

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env"
})

const Mangia = mongoose.connect(process.env.DATABASE).then(()=> {
    console.log("Database is up and running");
});



//create a variable that stores our port number
const port = process.env.PORT || 3001;

//listen to the request/response cycle
app.listen(port, ()=> {
    console.log (`server started on port ${port}`);
})