const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "prices",
    description: "Clear an amount of messages",
    permission: {
        bot: ['EMBED_LINKS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ['price', 'payment'],
    usage: "setprefix <prefix>",
    async run(message, args, client) {

        const prices = {
            "footer": {
                "text": "All prices can be negotiated"
            },
            "fields": [
                {
                    "name": "<a:milk_donce:940581410241122304> Commands (Limited nego)",
                    "value": ">>> <:am_b:938690505531858965> `\u23e3 10,000,000` - Race\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Selfroles\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Bulksnipe\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Better AFK\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Amarishop\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Heist Request (basic)\n<:am_b:938690505531858965> `\u23e3 10,000,000` - Donation Request (basic)\n<:am_b:938690505531858965> `\u23e3 15,000,000` - Heist Stats\n<:am_b:938690505531858965> `\u23e3 20,000,000` - Heist Request (advanced)\n<:am_b:938690505531858965> `\u23e3 40,000,000` - Item Calculator\n<:am_b:938690505531858965> `\u23e3 40,000,000` - Donation Request (advanced)\n<:am_b:938690505531858965> `\u23e3 50,000,000` - Private ar manager\n<:am_b:938690505531858965> `\u23e3 60,000,000` - Donation System (advanced)\n<:am_b:938690505531858965> `\u23e3 75,000,000` - Private role manager\n<:am_b:938690505531858965> `\u23e3 100,000,000` - Private channel manager",
                    "inline": false
                },
                {
                    "name": "<a:milk_donce:940581410241122304> Misc Commands (No price list)",
                    "value": ">>> <:am_b:938690505531858965> Uno\n<:am_b:938690505531858965> Split or Steal\n<:am_b:938690505531858965> Guess the number\n<:am_b:938690505531858965> Cowoncy donation\n<:am_b:938690505531858965> Status change actions\n<:am_b:938690505531858965> Giveaway with buttons\n<:am_b:938690505531858965> Heist (auto un\/viewlocking)",
                    "inline": false
                },
                {
                    "name": "<a:milk_donce:940581410241122304> Custom Commands (Nego)",
                    "value": ">>> Dm <@543031298130837510> ([Mushy](https:\/\/discordapp.com\/users\/543031298130837510))\nIf it is possible, price can be discussed. \nPrice according to the complexity of the command.",
                    "inline": false
                },
                {
                    "name": "<a:milk_donce:940581410241122304> Server Banners (Closed rn)",
                    "value": ">>> Dm <@654639494481313792> ([Kat](https:\/\/discordapp.com\/users\/654639494481313792)) if you want to discuss.\nUsually its `\u23e3 15M` depending on request.\nCan also make other things, like [this page](https:\/\/media.discordapp.net\/attachments\/909344848761466881\/940196687857737748\/Help_Command.png)",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "description": "```\n\u2192 Hosting & (slash \/ text) \u2192 \u23e3 25,000,000\n\u2192 Hosting & (slash + text) \u2192 \u23e3 30,000,000\n\u2192 Database (if required) \u2192 + \u23e3 5,000,000\n\u2192 Will take payment after the bot is complete.\n```",
            "title": "**Prices and Payment info**"
        }
    
        message.reply({ embeds: [prices] })

    }
})