var http = require ('http');
var server = http.createServer(function(req,res){
    if (req.method === 'POST') {
        var incomingData = '';
        req.on('data', function(data){
            incomingData += data;
        })
        req.on('end',function(){
            // at this point, we are guaranteed that all POST data are come in.
            var apper = incomingData.toUpperCase();
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end(upper);
        })
    }
})
server.listen (process.argv[2]);