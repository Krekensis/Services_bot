const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "ping",
    description: "Clear an amount of messages",
    permission: {
        bot: ['EMBED_LINKS'],
        user: ['SEND_MESSAGES']
    },
    usage: "setprefix <prefix>",
    async run(message, args, client) {

        const pingingEmbed = new Discord.MessageEmbed()
            .setColor('BLURPLE')
            .setDescription(`**Calculating ping...**`)
            .setFooter('Slow lol?')
        message.reply({
            embeds: [pingingEmbed]
        }).then((resultMessage) => {
            const pingEmbed = new Discord.MessageEmbed()
                .setColor('BLURPLE')
                .setDescription(`**My ping is** \n\`\`\`yaml\n${client.ws.ping} ms\`\`\``)
            resultMessage.edit({
                embeds: [pingEmbed]
            })
        })
    }
})
