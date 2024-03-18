var express = require("express")
var app = express()
var port = process.env.port || 3000;
app.listen(port,()=>{                      // this function says listen to port 3000
console.log("App listening to: "+port) 
})