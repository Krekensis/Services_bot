const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")
const schema = require("../../Models/owner") // again get the schema from the model 

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "addowner",
    description: "Clear an amount of messages",
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    usage: "addowner <@user>",
    owner: true,

    async run(message, args, client) {
        const person = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if (!person) return message.reply(`Who do you want to make owner lol?`)

        schema.findOne({ userID: person.user.id }, async (err, data) => { 
            if (err) throw err
            if (data) {
                message.reply("User is already an owner")
            } else {
                const e = await schema.create({ 
                    userID: person.user.id
                })
                await e.save() 
                message.reply(`${person.user.username} is now an owner`)
            }
        })
    }
})