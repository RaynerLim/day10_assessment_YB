//Load express library
var express = require("express");

//Create an instance of the app
var app = express();

//Mount public as a static resource directory
app.use(express.static(__dirname + "/public"));
app.use("/libs",express.static(__dirname + "/bower_components"))

//Set Port
var port = parseInt(process.argv[2]) || 3000;

//Bind app
app.listen(port, function() {
    console.log("Application started on port %d", port);
});

//Receive Registration data
app.get("/registration", function(req, resp){
    
    console.log(JSON.stringify(req.query));
    resp.status(200);
    resp.end();
    
})