var stun = require('node-stun');
var client = stun.createClient();
client.setServerAddr('stun.ideasip.com', 80);
client.start({}, function() {
    console.log(client.getMappedAddr())
});