var stun = require('node-stun');
var client = stun.createClient();
client.setServerAddr('120.27.32.78', 9002);
client.start({}, function() {
    console.log(client.getMappedAddr())
});