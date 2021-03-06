const Event = require('../Structures/Event.js');
const Discord = require('discord.js')

module.exports = new Event("guildCreate", (client, guild) => {

    const log = client.channels.cache.get("907229468836376606");
    const errlog = client.channels.cache.get("906575123769872384");
    const ch = guild.channels.cache.filter(c => c.name.includes('general')).first() || guild.channels.cache.filter(c => c.name.includes('chat')).first() || guild.channels.cache.filter(c => c.name.includes('main')).first() || guild.channels.cache.filter(c => c.name.includes('lounge')).first() || guild.systemChannel || guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first()
    const cha = guild.channels.cache.filter(c => c.type == 'GUILD_TEXT').first()

    if (guild.me.permissionsIn(cha).has("CREATE_INSTANT_INVITE")) {
        cha.createInvite({ maxAge: 0, maxUses: 0 }).then(i => {
            
            const embed = new Discord.MessageEmbed()
            .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
            .setDescription(`\`୨୧\`┇Guild Name: \`${guild.name}\`\n\`୨୧\`┇Guild ID: \`${guild.id}\`\n\`୨୧\`┇Members: \`${guild.memberCount}\`\n\`୨୧\`┇Owner: \`${client.users.cache.get(guild.ownerId).username}\``)
            .setColor("#82e03a")
            .setTimestamp()

            if (guild.iconURL()) {
                embed.setThumbnail(guild.iconURL({ dynamic: true }))
            }
            embed.addField("Link:",`${i}`)
            log.send({ embeds: [embed] })
        })
    } else {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Added to new guild', 'https://cdn.discordapp.com/emojis/672081916282798131.png')
        .setDescription(`\`୨୧\`┇Guild Name: \`${guild.name}\`\n\`୨୧\`┇Guild ID: \`${guild.id}\`\n\`୨୧\`┇Members: \`${guild.memberCount}\`\n\`୨୧\`┇Owner: \`${client.users.cache.get(guild.ownerId).username}\``)
        .setColor("#82e03a")
        .setTimestamp()

        if (guild.iconURL()) {
            embed.setThumbnail(guild.iconURL({ dynamic: true }))
        }
        log.send({ embeds: [embed] })
    }

    if (!ch) return;
    const welcome = { "description": `Hello. My name is ${client.user.username}\nRun \`-help\` to get started!`, "image": { "url": "https://media.discordapp.net/attachments/804190783296503828/939093962881380412/874277014184550400.png?width=512&height=512" }, "color": 16575144 }
    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setLabel('Invite Me')
                .setStyle('LINK')
                .setURL('https://discord.com/oauth2/authorize?client_id=782263514420871189&scope=bot&permissions=277025705025')
        )

    if (guild.me.permissionsIn(ch).has("EMBED_LINKS" && "SEND_MESSAGES")) {
        ch.send({ embeds: [welcome], components: [row] })
    } else {
        client.users.cache.get(guild.ownerId).send({ embeds: [welcome], components: [row] }).catch(() => { })
        const errem = new Discord.MessageEmbed()
            .setAuthor('Failed guildJoin embed', 'https://images-ext-2.discordapp.net/external/osuvoFtp-tXIthBmsnVAdVeM11Zt30Aeemh_JxTnReE/https/cdn.discordapp.com/emojis/706499634083659827.png')
            .addFields(
                { name: 'Server:', value: `\`${guild.name} [${guild.id}]\`` },
                { name: `Error:`, value: `\`\`\`yaml\nCouldn't send welc embed to channel. Dmed owner\n\`\`\`` })
            .setColor(16206140)
        errlog.send({ embeds: [errem], content: '<@&907611368784535582>' })
    }
});
