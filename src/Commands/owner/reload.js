const Command = require("../../Structures/Command.js")
const Discord = require("discord.js")
const glob = require("glob")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "reload",
    description: "Clear an amount of messages",
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    usage: "",
    owner: true,

    async run(message, args, client) {
    
        client.commands.sweep(() => true)
        glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
            if (err) return console.log(err)
            filePaths.forEach((file) => {
                delete require.cache[require.resolve(file)];

                const pull = require(file);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                }
                if (pull.aliases && Array.isArray(pull.aliases)) {
                    pull.aliases.forEach((aliases) => {
                        client.aliases.set(aliases, pull.name)
                    })
                }
            })

            message.reply("Reloaded <:neox_mochathumb:881473699461595166>")

        })
    }
})