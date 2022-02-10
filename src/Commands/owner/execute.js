const Discord = require('discord.js');
const Command = require("../../Structures/Command");
const child = require("child_process")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")


module.exports = new Command({
    name: "execute",
    description: "Evaluation cmd",
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    owner: true,
    async run(message, args, client) {
    const errlog = client.channels.cache.get("906575123769872384")
        if (message.author.id !== '654639494481313792' && message.author.id !== '543031298130837510') return message.reply("You are not an owner");

        const cmd = args.slice(1).join(" ")
        if (!cmd) return message.reply("Give smth to execute")


        child.exec(cmd, (err, res) => {
            if (err) return message.reply(`\`\`\`js\n${err}\n\`\`\``)
            message.reply(`\`\`\`js\n${res.slice(0, 2000)}\n\`\`\``)

        })


    }
})