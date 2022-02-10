const Event = require('../Structures/Event.js');
const Discord = require('discord.js')

module.exports = new Event("guildDelete", (client, guild) => {

    const log = client.channels.cache.find(c => c.id === "907229468836376606");
    const em = new Discord.MessageEmbed()
        .setAuthor('Removed from guild', 'https://cdn.discordapp.com/emojis/672081916677324830.png')
        .addFields({ name: 'Server Name:', value: `\`${guild.name}\``}, { name: `ID:`, value: `\`${guild.id}\`` })
        .setColor("#ff4a4a")
        .setTimestamp()
        .setThumbnail(guild.iconURL())

    try {
    log.send({ embeds: [em]})
    } catch (error) {

        const em2 = new Discord.MessageEmbed()
        .setAuthor('Removed from guild', 'https://cdn.discordapp.com/emojis/672081916677324830.png')
        .addFields({ name: 'Server Name:', value: `\`${guild.name}\``}, { name: `ID:`, value: `\`${guild.id}\`` })
        .setColor("#ff4a4a")
        .setTimestamp()

        log.send({ embed: [em2]})
    }
});