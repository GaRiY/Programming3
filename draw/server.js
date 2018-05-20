var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cordins = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(i in cordins){
        io.sockets.emit("draw!", cordins[i]);
    }
    function drel(co) {
        cordins.push(co);
        io.sockets.emit("draw!", co);
    }

    socket.on("ElipsCord", drel)

});
