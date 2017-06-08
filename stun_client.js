var stun = require('node-stun');
var client = stun.createClient();
//client.setServerAddr('120.27.32.78', 29695);
client.setServerAddr('120.27.32.78', 3478);
client.start({}, function() {
    console.log(client.getMappedAddr())
});

//  iptables -I INPUT -p tcp --dport 3478 -j ACCEPT