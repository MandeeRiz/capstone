const app = require("./App")

//create a variable that stores our port number
const port = 3000;

//listen to the request/response cycle
app.listen(port, ()=> {
    console.log (`server started on port ${port}`);
})