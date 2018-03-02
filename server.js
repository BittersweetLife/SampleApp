var http = require('http');
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// var fs = require('fs');

// var handler = function(req,res){
//     fs.readFile(__dirname + "/client.html",function(err,data){
//         if(err){
//             res.writeHead(500);
//         }else{
//             res.writeHead(200);
//             res.end(data);
//         }
//     });
// };

// var app = http.createServer(handler)
// app.listen(8080);

console.log("Server running!!!")