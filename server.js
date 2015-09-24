var express = require('express');
var app = express();

//app.use(express.static('src'));
app.use("/", express.static('src'))

var server = app.listen(5000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('SplitTest server listening at http://%s:%s', host, port);
});
