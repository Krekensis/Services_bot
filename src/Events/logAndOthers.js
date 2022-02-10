const Discord = require("discord.js");
const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", async (client, message, member) => {

    if (message.author.bot) return;

    if (message.content.replace(/(<@|!|>){1}/g, '') == `${client.user.id}`) return message.reply({
        embeds: [new Discord.MessageEmbed()
            .setColor(16575144)
            .setTitle("Hi there!")
            .setImage('https://images-ext-1.discordapp.net/external/6Jzk_bURFQpoEWeEE-RV3wSNfEES5Uh_DtZ8TfpSYEA/https/cdn.discordapp.com/emojis/833256277383446539.gif')
            .setDescription(`My prefix in this server is \`${client.prefix}\`\nUse \`${client.prefix}help\` to check my commands.`)]
    })

    let cntnt
    if (message.content.length > 1000) { cntnt = message.content.slice(0, 997) + `...` }
    else { cntnt = message.content }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[ COMMAND LOGGING ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    if (!message.content.startsWith(client.prefix)) return;
    const args = message.content.substring(client.prefix.length).split(/ +/);
    const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(a => a.aliases && a.aliases.includes(args[0].toLowerCase()))
    if (!command) return;

    if (command) {
        const commandch = client.channels.cache.get('923913754696118292')
        commandch.send({
            embeds: [new Discord.MessageEmbed()
                .setColor('BLURPLE')
                .setAuthor(`${message.author.tag} used...`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                .addField('Guild Info', `${message.guild.name} | ${message.guild.id}`)
                .addField('Content', cntnt)
                .setTimestamp()]
        })
    }

})
