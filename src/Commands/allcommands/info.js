const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "info",
    description: "Clear an amount of messages",
    permission: {
        bot: ['EMBED_LINKS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ['information'],
    usage: "setprefix <prefix>",
    async run(message, args, client) {

        const info = { "fields": [{ "name": "Made with", "value": ">>> <:node:939040581097771028> **[Node.js](https://nodejs.org/en/)**\n```\nNode.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.\n```\n<:djs:939043382083354635> **[Discord.js](https://discord.js.org)**\n```\nDiscord.js is a powerful Node.js module that allows you to interact with the Discord API very easily.\n```\n<:mongo:939040399736045618> **[MongoDB](https://www.mongodb.com)**\n```\nMongoDB is an open source NoSQL database management program. It quite useful for working with large sets of distributed data.\n``` \n<:pebble:939052090028863508> **[PebbleHost](https://pebblehost.com)**\n```\nAffordable Dedicated Server Hosting. PebbleHost offers high quality dedicated servers with premium support all for a budget price.\n```", "inline": false }], "title": "**Information about us**", "description": "> Our aim was to mainly share our work for a price. Good quality custom bots which will help you to manage your server better and make work efficient. Everything was made from scratch unlike ||redbots||\n> \n> → <:im_kat:936974561281441792> **[Senpai#2473](https://discordapp.com/users/654639494481313792)**\n> → <:im_mushy:936974263360045066> **[lightninbolt986#3111](https://discordapp.com/users/543031298130837510)**\n‌", "color": 16575144 }
        message.reply({ embeds: [info] })

    }
})