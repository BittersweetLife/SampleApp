var http = require('http');
var fs = require('fs');

var handler = function(req,res){
    fs.readFile(__dirname + "/client.html",function(err,data){
        if(err){
            res.writeHead(500);
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler)
app.listen(8080);

console.log("Server running!!!")