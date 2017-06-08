var stun = require('node-stun');
var server = stun.createServer({
    primary: {
        host: "10.163.121.218",
        port: 9001
    },
    secondary: {
        host: "120.27.32.78",
        port: 9002
    }
});
//server.setAddress0("bindAddress0");
//server.setAddress1("bindAddress1");
//server.setPort(9000);
//server.setPort1(9002);
//server.setResponseAddress0("externalIP0");
//server.setResponseAddress1("externalIP1");
server.listen();