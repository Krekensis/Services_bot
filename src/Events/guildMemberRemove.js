const Event = require('../Structures/Event.js');
const Discord = require('discord.js')
//const autobanModel = require("../Models/autoban")

module.exports = new Event("guildMemberRemove", (client, member) => {

    return
    /*
    autobanModel.findOne({ guildId: member.guild.id }, async (err, data) => {
        if (err) throw err
        if (data) {
            if (data.enabled = true) { await member.ban() }
            else if (data.enabled = false) { return }
        }
    })
*/
});