var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = ["message":[]
				"cordin":[]];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
   for(var i in messages.message) {
     io.sockets.emit("display message", messages.message[i]);
   }
   socket.on("send message", function (data) {
       messages.message.push(data);
       io.sockets.emit("display message", data);
   })

   socket.on("uzum em jnjem messagenery", function () {
       messages.message = [];
	   messages.cordin = [];
       io.sockets.emit("jnjeq dzer p tagery");
   })

   socket.on("draw", function (cordinats){
	  //p5 cords for drawing
	  messages.message.push(cordinats);
   })
});
