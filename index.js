var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Service Created Successfully...:)");
    res.end();
}).listen(7777);