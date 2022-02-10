const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
    console.log("I am online");
    
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' });
    client.user.setStatus('idle');
});