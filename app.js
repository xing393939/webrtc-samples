var fs = require('fs');
var express = require('express');
var ExpressPeerServer = require('peer').ExpressPeerServer;

var app = express();
var server = require('https').createServer({
    key: fs.readFileSync('./cert/server.key', 'utf8'),
    cert: fs.readFileSync('./cert/server.crt', 'utf8')
}, app);
server.listen(9003);
app.use('/api', ExpressPeerServer(server, {debug: true}));

app.use(express.static('./static'));