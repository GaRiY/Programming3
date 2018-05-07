var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});

app.get("/name", function(req, res){
   res.send("Hello world name");
});

app.get("/name/:name", function(req, res){
    var n = req.params.name;
   res.send("<h1>Hello " + n + "</h1>");
});

app.get("/search", function(req, res){
   res.redirect("https://www.google.ru/?gws_rd=ssl");
});

app.get("/*", function(req, res){
   res.send("OOOOOPS");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
