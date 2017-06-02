var express = require('express');
var ExpressPeerServer = require('peer').ExpressPeerServer;

var app = express();
var server = app.listen(9003);
app.use('/api', ExpressPeerServer(server, {debug: true}));

app.use(express.static('./static'));