const Event = require('../Structures/Event.js');
const Discord = require('discord.js')

module.exports = new Event("guildCreate", (client, guild) => {

    const log = client.channels.cache.find(c => c.id === "907229468836376606");
    const errlog = client.channels.cache.find(c => c.id === "906575123769872384");
    const ch = guild.channels.cache.filter(c => c.name.includes('general')).first() || guild.channels.cache.filter(c => c.name.includes('chat')).first() || guild.channels.cache.filter(c => c.name.includes('main')).first() || guild.channels.cache.filter(c => c.name.includes('lounge')).first() || guild.systemChannel || guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first()
    const cha = guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first()

    const em2 = new Discord.MessageEmbed()
        .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
        .addFields({ name: 'Server Name:', value: `\`${guild.name}\`` }, { name: `ID:`, value: `\`${guild.id}\`` })
        .setColor("#82e03a")
        .setTimestamp()

    const em = new Discord.MessageEmbed()
        .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
        .addFields({ name: 'Server Name:', value: `\`${guild.name}\`` }, { name: `ID:`, value: `\`${guild.id}\`` })
        .setColor("#82e03a")
        .setTimestamp()
        .setThumbnail(guild.iconURL())

    try {
        if (guild.me.permissionsIn(cha).has("CREATE_INSTANT_INVITE" || "ADMINISTRATOR")) {
            cha.createInvite({ maxAge: 0, maxUses: 0 }).then(i => {
                const emlink = new Discord.MessageEmbed()
                    .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
                    .addFields({ name: 'Server Name:', value: `\`${guild.name}\`` }, { name: `ID:`, value: `\`${guild.id}\`` }, { name: `Link:`, value: `${i}` })
                    .setColor("#82e03a")
                    .setTimestamp()
                    .setThumbnail(guild.iconURL())
                log.send({ embeds: [emlink] })
            })
        }
        else log.send({ embeds: [em] })

    } catch (error) {
        if (guild.me.permissionsIn(cha).has("CREATE_INSTANT_INVITE" || "ADMINISTRATOR")) {
            cha.createInvite({ maxAge: 0, maxUses: 0 }).then(i => {
                const em2link = new Discord.MessageEmbed()
                    .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
                    .addFields({ name: 'Server Name:', value: `\`${guild.name}\`` }, { name: `ID:`, value: `\`${guild.id}\`` }, { name: `Link:`, value: `${i}` })
                    .setColor("#82e03a")
                    .setTimestamp()
                log.send({ embeds: [em2link] })
            })
        }
        else log.send({ embeds: [em2] })

    }
    try {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setLabel('Invite Me')
                    .setStyle('LINK')
                    .setURL('https://discord.com/oauth2/authorize?client_id=782263514420871189&scope=bot&permissions=280577')
            )
        if (!ch) return;
        const welcome = {"description":`**Hello.** My name is **${client.user.username}**\nRun \`${client.prefix}help\` to get started!`,"image":{"url":"https://media.discordapp.net/attachments/804190783296503828/939093962881380412/874277014184550400.png?width=512&height=512"},"color":16575144}
        if (guild.me.permissionsIn(ch).has("EMBED_LINKS")) ch.send({ embeds: [welcome], components: [row]})


    } catch (error) {
        const errem = new Discord.MessageEmbed()
            .setAuthor('ERROR', 'https://images-ext-2.discordapp.net/external/osuvoFtp-tXIthBmsnVAdVeM11Zt30Aeemh_JxTnReE/https/cdn.discordapp.com/emojis/706499634083659827.png')
            .addFields(
                { name: 'Server:', value: `\`${guild.name} [${guild.id}]\`` },
                { name: `Error:`, value: `\`\`\`js\n${error.message}\n\`\`\`` })
            .setColor(16206140)
        errlog.send({ embeds: [errem], content: '<@&907611368784535582>' })
    }

});