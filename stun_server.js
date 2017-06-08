var stun = require('node-stun');
var server = stun.createServer({
    primary: {
        host: "114.215.108.80"
    },
    secondary: {
        host: "120.27.32.78"
    }
});

server.on('log', function (log) {
    console.log('%s : [%s] %s', new Date(), log.level, log.message);
});

server.listen();