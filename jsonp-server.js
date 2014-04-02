var http = require('http');
var server = http.createServer(function(req, res) {
    var cb = require('url').parse(req.url, true).query.callback;
    console.log(req.url);
    console.log(cb);
    res.write(cb+'({"key":"val"});');
    res.end();
});

server.listen(8999);
