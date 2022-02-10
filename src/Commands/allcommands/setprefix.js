const prefixSchema = require('../../Models/prefix.js');
const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "setprefix",
    description: "Clear an amount of messages",
    permission: {
        bot: ['EMBED_LINKS'],
        user: ['ADMINISTRATOR']
    },
    aliases: ['prefix'],
    usage: "setprefix <prefix>",
    async run(message, args, client) {
        const res = args[1]

        if (!res) return message.reply(`${emotes.cross} Please provide a prefix to set.`)

        prefixSchema.findOne({
            Guild: message.guild.id,
        }, async (err, data) => {
            if (err) throw err
            if (data) {
                data.Prefix = res
                await data.save()
                message.reply(`${emotes.tick} Prefix has been changed to \`${res}\``)
            } else {
                data = new prefixSchema({
                    Guild: message.guild.id,
                    Prefix: res
                })
                await data.save()
                message.reply(`${emotes.tick} Prefix set to \`${res}\``)
            }

        })


    }
})