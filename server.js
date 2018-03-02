var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.end("Hello World!");

    fs.readFile(__dirname + "/client.html",function(err,data){
        if(err){
            response.writeHead(500);
        }else{
            //response.writeHead(200, {"Content-Type": "text/plain"});
            response.writeHead(200);            
            response.end(data);
        }
    });

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);