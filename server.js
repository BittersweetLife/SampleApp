var http = require("http");
var fs = require("fs");
//var socketio = require('socket.io');

var server = http.createServer(function(request, response) {

    fs.readFile(__dirname + "/client.html",function(err,data){
        if(err){
            response.writeHead(500);
            response.end(err);
        }else{
            //response.writeHead(200, {"Content-Type": "text/plain"});
            response.writeHead(200);            
            response.end(data);
        }
    });

});

// var io = socketio.listen(server);

// io.sockets.on("connection",function(socket){
//     setInterval(function(){
//         var timestamp = Date.now();
//         console.log("Emitted : " + timestamp);
//         socket.emit('timer', timestamp);
//     }, 2000);
//     socket.on('submit',function(data){
//         console.log("Submitted : " + data)
//     })
// });

var port = process.env.PORT || 1337;
server.listen(8080);

console.log("Server running at http://localhost:%d", port);