var stun = require('node-stun');
var client = stun.createClient();
client.setServerAddr('120.27.32.78', 3478);
client.start(function (result) {
    var mapped = client.getMappedAddr();
    console.log([
        "Complete(" + result + "): ",
        (client.isNatted()?"Natted":"Open"),
        " NB=" + client.getNB(),
        " EF=" + client.getEF(),
        " (" + client.getNatType() + ")",
        " mapped=" + mapped.address + ":" + mapped.port,
        " rtt=" + client.getRtt()
    ].join(''));

    client.close(function () {
        console.log("All sockets closed.");
    });
});