var stun = require('node-stun');
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