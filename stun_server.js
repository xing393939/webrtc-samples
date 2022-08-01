var http = require('http');
var stun = require('node-stun');
var sdpTransform = require('sdp-transform');

//create a server object:
http.createServer(function (req, res) {
    let ori = decodeURIComponent(req.url.substring(4));
    let str = sdpTransform.parse(ori.replace(/\+/g, ' '));
    res.write(JSON.stringify(str));
    res.end();
}).listen(56843);

var server = stun.createServer({
    primary: {
        host: "192.168.2.119",
        port: 56844,
    },
    secondary: {
        host: "172.21.176.1",
        port: 56845,
    }
});

server.on('log', function (log) {
    console.log('%s : [%s] %s', new Date(), log.level, log.message);
});

server.listen();