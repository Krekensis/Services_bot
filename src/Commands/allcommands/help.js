const Discord = require('discord.js');
const Command = require("../../Structures/Command.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: 'help',
    description: 'command',
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ["help"],
    usage: "syntax: n.",
    async run(message, args, client) {

        const menu = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId('help')
                    .setPlaceholder('Select an option')
                    .addOptions([
                        //{
                        //    label: 'Help Menu',
                        //    value: 'Help Menu',
                        //},
                        {
                            label: 'Commands',
                            value: 'Commands',
                            emoji: '<:am_b:938690505531858965>'
                        },
                        {
                            label: 'Reviews',
                            value: 'Reviews',
                            emoji: '<:am_b:938690505531858965>'
                        },
                        {
                            label: 'Banners',
                            value: 'Banners',
                            emoji: '<:am_b:938690505531858965>'
                        },
                        {
                            label: 'Prices',
                            value: 'Prices',
                            emoji: '<:am_b:938690505531858965>'
                        },
                        {
                            label: 'Info',
                            value: 'Info',
                            emoji: '<:am_b:938690505531858965>'
                        },
                    ]),
            );

        //1.
        const icalc = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/804190783296503828\/936579791631552512\/unknown.png?width=744&height=603",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/1MfWZfq-6VpCEhdUiAS2Gag8XkQ_Y3T5mJVo6-86yvA\/%3Fwidth%3D744%26height%3D603\/https\/media.discordapp.net\/attachments\/804190783296503828\/936579791631552512\/unknown.png",
                "width": 744,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Itemcalc` helps you to calculate any amount of `dank memer` items very efficiently. Now you won't need to worry about calculating each item seperately.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Change item prices.\n<:nx_tick:910049767910952961> Change item emotes.\n<:nx_tick:910049767910952961> Add your own aliases for items.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Item Calculator**"
        }

        //2.
        const heiststats = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/936588699993534524\/unknown.png?width=927&height=603",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/h3XSimQdAcZMVZ2rGIpb4qS_CYW3u7ir9vP5LKoKdxk\/%3Fwidth%3D927%26height%3D603\/https\/media.discordapp.net\/attachments\/847081128942370826\/936588699993534524\/unknown.png",
                "width": 927,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Heistats` will give you all the info about an heist. Stats can also be logged in a channel if requested upon order. This command is useful if you have a big server and need to pay the most fined person \/ Just for keeping track.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Number of `dead`, `fined`, `successful`\n<:nx_tick:910049767910952961> Max payouts, Total amount fined\n<:nx_tick:910049767910952961> Who got fined the most.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Heist stats**"
        }

        //3. 
        const amarishop = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/936952472470179880\/PicsArt_01-29-05.24.19.jpg?width=1042&height=603",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/INl4CjiSSXozoePBqYdOLgcpx5IQ6-4iRxqjdRa-iJI\/%3Fwidth%3D1042%26height%3D603\/https\/media.discordapp.net\/attachments\/847081128942370826\/936952472470179880\/PicsArt_01-29-05.24.19.jpg",
                "width": 1042,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Amarishop` makes a rank system in your server using `amaribot` leveling system. Users can buy roles with perks in exchange of levels. This system can help you increase activity in your server by giving a goal to achieve. Resetting of levels is **manual** because amari API is restricted to fetching data only.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Progress bar.\n<:nx_tick:910049767910952961> Calculations.\n<:nx_tick:910049767910952961> Will give role instantly.\n<:nx_tick:910049767910952961> Purchasing cooldown to prevent miscalculations.\n<:nx_cross:914921124670890064> Manual resetting of levels.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Amari Shop**"
        }

        //4. 
        const dnsystem = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/937014311811973130\/PicsArt_01-29-09.29.51.png?width=721&height=603",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/MR22NZ-V7ej-v98uB9e9HN6E_4JCFPF3kfnqHQ7wDgQ\/%3Fwidth%3D721%26height%3D603\/https\/media.discordapp.net\/attachments\/847081128942370826\/937014311811973130\/PicsArt_01-29-09.29.51.png",
                "width": 721,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Basic",
                    "value": "<:nx_tick:910049767910952961> `Accept`, `Cancel` button.\n<:nx_tick:910049767910952961> Copy command (Noumenon)\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Advanced (DMC)",
                    "value": "<:nx_tick:910049767910952961> `Accept`, `Cancel` button.\n<:nx_tick:910049767910952961> Auto start giveaway.\n<:nx_tick:910049767910952961> Auto donation note.\n\n*You will need our `giveaways` and `donation system` for this to work*",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Advanced (Items)",
                    "value": "<:nx_tick:910049767910952961> `Accept`, `Cancel` button.\n<:nx_tick:910049767910952961> Auto start giveaway.\n<:nx_tick:910049767910952961> Auto item calculation.\n<:nx_tick:910049767910952961> Auto donation note.\n\n*You will need our `giveaways`, `donation system` and `itemcalc` for this to work*",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**GIveaway Donation System**"
        }

        //5
        const channelmanager = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/804190783296503828\/938696018365673542\/PicsArt_02-03-12.52.43.jpg",
                "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/pHhcE-1KbLqzXQKTIA6H-66C8UqdCOuogJ_H02W4Lr8\/https\/media.discordapp.net\/attachments\/804190783296503828\/938696018365673542\/PicsArt_02-03-12.52.43.jpg",
                "width": 1114,
                "height": 652
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Channel manager` will help you manage all private channels in your server easily. It includes adding members, so users can easily add their friends instead of relying on a staff to do it for them.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> `Create`\/`Reset` channels.\n<:nx_tick:910049767910952961> `Add`\/`Remove` members.\n<:nx_tick:910049767910952961> Info about your channel.\n<:nx_tick:910049767910952961> Max members depending on roles.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Channel Manager**"
        }

        //6
        const armanager = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/909344848761466881\/941201275876442132\/PicsArt_02-10-10.47.43.jpg",
                "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/0liNcig69j-57v0HpYd0Mf8hKvxyTp6ALd5BeN_b7Ck\/https\/media.discordapp.net\/attachments\/909344848761466881\/941201275876442132\/PicsArt_02-10-10.47.43.jpg",
                "width": 1398,
                "height": 880
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Autoreact manager` will help you manage all private autoreacts in your server easily. It includes autonomous adding\/removing of ar(s), so users can easily add their ar(s) instead of relying on a staff to do it for them.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> List of your autoreacts.\n<:nx_tick:910049767910952961> `Add`\/`Remove` autoreacts.\n<:nx_tick:910049767910952961> Add reacts with emoji ID.\n<:nx_tick:910049767910952961> Remove reacts with index no.\n<:nx_tick:910049767910952961> Max autoreacts depending on roles.\n<:nx_tick:910049767910952961> Automatically removes an autoreact once bot can't access the emoji.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Autoreact Manager**"
        }

        //7
        const afksystem = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/936962976974508052\/PicsArt_01-29-06.06.14.jpg?width=461&height=603",
                "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/FlYgZqjmkYGLt77b29EkRgKgGl0PAYYKfB4rixAwUbU\/%3Fwidth%3D461%26height%3D603\/https\/media.discordapp.net\/attachments\/847081128942370826\/936962976974508052\/PicsArt_01-29-06.06.14.jpg",
                "width": 461,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "AFK system lol...",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Logs pings received.\n<:nx_tick:910049767910952961> Updates nickname.\n<:nx_tick:910049767910952961> Embed wont break on multiple pings.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Advanced AFK**"
        }

        //8
        const snipes = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/938031051224256592\/unknown.png?width=515&height=603",
                "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/t0CSpD_nhneMH03FynuxNqBaFNFtcpASswfxUjURdxY\/%3Fwidth%3D515%26height%3D603\/https\/media.discordapp.net\/attachments\/847081128942370826\/938031051224256592\/unknown.png",
                "width": 515,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "Many bots will lose access to `snipe` soon.\nSo why not have `bulk snipe` in custom bot.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Logs messages infinitely.\n<:nx_tick:910049767910952961> Paginated, so won't break.\n<:nx_tick:910049767910952961> Timestamps on respective messages.\n<:nx_cross:914921124670890064> Resets once bot is restarted.\n<:nx_cross:914921124670890064> Cannot log bulk purged messages.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Snipe +  Bulk snipe**"
        }

        //9
        const race = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/937327058898538516\/PicsArt_01-30-05.png",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/0eLjpIMsp4M2GqElY3QTLHJJC6cWFZkwMqA9siU56OE\/https\/media.discordapp.net\/attachments\/847081128942370826\/937327058898538516\/PicsArt_01-30-05.png",
                "width": 466,
                "height": 603
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "`Race` can be a great addition for your bot. \nUses interactions to make the game.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Custom modes. (if requested)\n<:nx_tick:910049767910952961> Custom emotes. (if requested)\n<:nx_tick:910049767910952961> Uses interactions.\n<:nx_tick:910049767910952961> Upto 20 players.\n<:nx_tick:910049767910952961> Auto start in `60s`\/max players.\n<:nx_tick:910049767910952961> Auto create game in intervals. (if requested)",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Race Minigame**"
        }

        //10
        const statusrole = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/938037472296833094\/PicsArt_02-01-05.15.52.jpg",
                "proxy_url": "https:\/\/images-ext-1.discordapp.net\/external\/U0iyH2EvhzXS8ytdjGMf8M7Sti_nlEwrsQNdLIBJbCQ\/https\/media.discordapp.net\/attachments\/847081128942370826\/938037472296833094\/PicsArt_02-01-05.15.52.jpg",
                "width": 1838,
                "height": 932
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "Easily manage giving roles to promoters.\nUsers won't have to contact a staff to get the role. \nOther actions **except** giving roles can be requested.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Logs status change and roles.\n<:nx_tick:910049767910952961> I can't find anything more to write.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Status Update Actions**"
        }

        //11
        const broles = {
            "footer": {
                "text": "All embeds will be specially made according to you."
            },
            "image": {
                "url": "https:\/\/media.discordapp.net\/attachments\/847081128942370826\/938027672121016330\/PicsArt_01-30-08.05.56.png",
                "proxy_url": "https:\/\/images-ext-2.discordapp.net\/external\/7FYK6lGrV-Pbj3oGnwnU01sO7B6ncBI5n2fJRNTUPuY\/https\/media.discordapp.net\/attachments\/847081128942370826\/938027672121016330\/PicsArt_01-30-08.05.56.png",
                "width": 1778,
                "height": 981
            },
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Description",
                    "value": "Upgrade from using `reactions` for roles to `buttons`\/`dropdowns` or `select menus`. Looks better, works better.",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Features",
                    "value": "<:nx_tick:910049767910952961> Custom banner. (if requested)\n<:nx_tick:910049767910952961> Custom emotes. (if requested)\n<:nx_tick:910049767910952961> Ephemeral replies.\n<:nx_tick:910049767910952961> Removes roles if user already has them.",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Button \/ Dropdown Roles**"
        }

        //12
        const misc = {
            "fields": [
                {
                    "name": "<:am_b:938690505531858965> Donation System",
                    "value": "<:nx_tick:910049767910952961> Donation logs.\n<:nx_tick:910049767910952961> Donation goal progress.\n<:nx_tick:910049767910952961> Add item values directly. (if req)\n<:nx_tick:910049767910952961> Auto updating lb in channel. (if req)\n<:nx_tick:910049767910952961> Add donation directly from dn req embed. (if req)\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Private Role Manager",
                    "value": "<:nx_tick:910049767910952961> `Create`\/`Reset` role.\n<:nx_tick:910049767910952961> `Add`\/`Remove` role to friends.\n<:nx_tick:910049767910952961> Change role color.\n<:nx_tick:910049767910952961> `Add`\/`Remove` role icon (if req)\n<:nx_tick:910049767910952961> Role info + List of members.\n<:nx_tick:910049767910952961> Max members depending on roles.\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Heist Request (Similar to giveaway request)",
                    "value": "<:nx_tick:910049767910952961> `Accept` \/ `Decline` buttons.\n<:nx_tick:910049767910952961> Auto note donation. (if req)\n<:nx_tick:910049767910952961> Auto host heist\n(Un\/viewlock channel according to req) + (Ping heist role)\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Guess the number",
                    "value": "<:nx_tick:910049767910952961> Auto `unlock` \/ `lock` with ping.\n<:nx_tick:910049767910952961> `Time taken`, `Participant size`, `Attempts`\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> Split or Steal",
                    "value": "<:nx_tick:910049767910952961> Giveaway with 2 winners and ping.\n<:nx_tick:910049767910952961> Buttons for winners to choose `split` or `steal`\n\u200c",
                    "inline": false
                },
                {
                    "name": "<:am_b:938690505531858965> UNO",
                    "value": "<:nx_tick:910049767910952961> All the following commands.\n```\ncreate, cancel, play, join, start, \ntable, hand, draw, quickend, kick, \nleave, callout, uno!, settings.\n```",
                    "inline": false
                }
            ],
            "color": 16575144,
            "type": "rich",
            "title": "**Misc Commands (No preview)**"
        }

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

        const banner1 = new Discord.MessageEmbed()
            .setTitle("Banner Competition - Dank Zone")
            .setColor(16575144)
            .setDescription("(Winner)")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/938727749558874153/PicsArt_09-01-12.42.31.png")

        const banner2 = new Discord.MessageEmbed()
            .setTitle("Banner Competition - Elite Empire")
            .setColor(16575144)
            .setDescription("(Entry 1)")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/938727749907013633/PicsArt_01-06-01.05.56.jpg")

        const banner3 = new Discord.MessageEmbed()
            .setTitle("Banner Competition - Elite Empire")
            .setColor(16575144)
            .setDescription("(Entry 2)")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/938727750406139904/Elite-Empire-Banner_3.jpg")

        const banner4 = new Discord.MessageEmbed()
            .setTitle("Banner Competition - Elite Empire")
            .setColor(16575144)
            .setDescription("(Entry 3)")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/940184478880514118/w80ihvmIpuVkQAAAABJRU5ErkJggg.png")

        const icon12 = new Discord.MessageEmbed()
            .setTitle("Icon Competition - Elite Empire")
            .setColor(16575144)
            .setDescription("(Winner)\n- <a:boost:940186051492843531> Nitro Boost")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/940182931610169344/vwFOyU8GhVSRVgAAAABJRU5ErkJggg.png")

        const amari = new Discord.MessageEmbed()
            .setTitle("Halloween Overlay Competition - AmariBot")
            .setColor(16575144)
            .setDescription("(Winner)\n- <a:boost:940186051492843531> Nitro Boost\n- <:amaprem:940186401251663932> Amari Premium")
            .setImage("https://media.discordapp.net/attachments/847081128942370826/940182408882438154/PicsArt_02-07-03.18.59.jpg")

        const hallow = new Discord.MessageEmbed()
            .setTitle("Halloween Banner - Dank Zone")
            .setColor(16575144)
            .setImage("https://media.discordapp.net/attachments/847081128942370826/938727750821371904/PicsArt_10-10-05.33.37.jpg")

        const neox = new Discord.MessageEmbed()
            .setTitle("Background Banner - Neox")
            .setColor(16575144)
            .setDescription("For my custom bot :)")
            .setImage("https://images-ext-2.discordapp.net/external/uJ3C0BMa6VC8f8jYeCVFygTu3HuYFNWMsHp_ZVgrYTA/https/media.discordapp.net/attachments/804352046534492250/918076805968195604/7997EAAAAASUVORK5CYII.png")

        const embeds = [icalc, heiststats, amarishop, dnsystem, channelmanager, armanager, afksystem, snipes, race, statusrole, broles, misc]
        const bannerembeds = [banner1, banner2, banner3, banner4, icon12, amari, hallow, neox]

        const spooki = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> General module (`welcoming, selfroles`)\n<:nx_tick:910049767910952961> Server manager module (`prvt channel, prvt role, prvt ars`)\n<:nx_tick:910049767910952961> Donation module (`dnote, mydono, dn lb, dn req. system, itemnote`)\n<:nx_tick:910049767910952961> Utils module (`giveaways, heist system, itemcalc, amarishop, heiststats, afk, bulksnipe`)", "inline": false }, { "name": "<:am_b:938690505531858965> Review ★★★★★ `10/10`", "value": "```\nVery good bot. The embeds are very good and clean.\nIt provides very useful utilities like \"channel manager\" which makes managing the channels really easier. Shifted to this donation system because previous bot has been offline for too long. This donation system is similar to last one but has a progress bar which looks very cool. The bot is quite fast too and has a good uptime. It did take quite some time to complete this bot but overall 10/10 service.\n```", "inline": false }], "author": { "name": "Spooki#6969 — 428523095704207360", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949648502730936380/a_54faf5d7469f7668ece1d222fd0ad8b5.gif" }, "color": 16575144 }
        const zaexy = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Giveaway system`\n<:nx_tick:910049767910952961> `Tempban freeloader`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `8/10`", "value": "```\nThe bot is great, it works well and exceeds my expectations on what the bot could have turn out the output and embeds are one of the most unique designs I have ever seen, its truly one of a kind.\n```\n ", "inline": false }], "author": { "name": "ZÆXY#3349 — 648704448293765169", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949648713331146822/07d16ff8630fdec2242bed6f03391cf3.png" }, "color": 16575144 }
        const chico = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Giveaway system`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `9/10`", "value": "```\nIt is really good bot. I like the embeds but I want some more specific requirements (no. of messages) so a 9 for me.\n```\n ", "inline": false }], "author": { "name": "Chico ;)#3298 — 852793050467532870", "icon_url": "https://images-ext-2.discordapp.net/external/A86uLA_4KQ5pzKIQzxda4jNznGoipQLV7ycJe-G13cE/https/media.discordapp.net/attachments/892704135244283916/949648927832014888/78ba99650d20e4fcdcbc3daee6d2e16d.png" }, "color": 16575144 }
        const atulya = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Welcome system`\n<:nx_tick:910049767910952961> `Giveaway system`\n<:nx_tick:910049767910952961> `Tempban freeloader`\n<:nx_tick:910049767910952961> `Complete donation system`\n<:nx_tick:910049767910952961> `Advanced donation req. system`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `???`", "value": "```\nNo review yet\n```", "inline": false }], "author": { "name": "乛 Atulya ༘#9999 — 897455147196747818", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949722052590465064/a_671d21e81973d83ec0e0c3d30a32f09d.gif" }, "color": 16575144 }

        const reviewembeds = [spooki, zaexy, chico, atulya]

        const image = new Discord.MessageAttachment('https://media.discordapp.net/attachments/909344848761466881/940142233653510154/OrqiYQCjvvAAAAAASUVORK5CYII.png', "Help_Command.png")
        const helpembed = await message.reply({ files: [image], components: [menu] });

        const filter = (b) => { if (b.user.id === message.author.id) return true; return b.reply({ content: "<:nx_cross:914921124670890064> These are not for you.", ephemeral: true }) };

        const collector = await helpembed.createMessageComponentCollector({ filter: filter, componentType: "SELECT_MENU" });

        collector.on("collect", async (i) => {
            await i.deferUpdate()
            const value = i.values[0]

            //if (value === "Help Menu") {
            // helpembed.edit({ attachments: [], content: "https://media.discordapp.net/attachments/909344848761466881/940142233653510154/OrqiYQCjvvAAAAAASUVORK5CYII.png",embeds: [], components: [menu] })
            //helpembed.edit({ files: [image], embeds: [], components: [menu] })
            //}
            if (value === "Commands") {
                let first = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`first`)
                let dfirst = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`dfirst`).setDisabled(true)

                let previous = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`previous`)
                let dprevious = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`dprevious`).setDisabled(true)

                let next = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`next`)
                let dnext = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`dnext`).setDisabled(true)

                let last = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`last`)
                let dlast = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`dlast`).setDisabled(true)

                let currentPage = 1

                let page = new Discord.MessageButton()
                    .setStyle('SECONDARY')
                    .setCustomId(`page`)
                    .setLabel(`${currentPage}/${embeds.length}`)
                    .setDisabled(true)

                let butts = [dfirst, dprevious, page, next, last]

                helpembed.edit({ attachments: [], embeds: [embeds[0]], components: [menu, new Discord.MessageActionRow().addComponents(butts)] })

                const collector2 = await helpembed.createMessageComponentCollector({ filter: filter, componentType: "BUTTON" });

                collector2.on("collect", async (i) => {
                    //i.deferUpdate()
                    if (i.customId !== "first" && i.customId !== "previous" && i.customId !== "next" && i.customId !== "last") return;
                    if (i.customId === "first") {
                        currentPage = 1

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${embeds.length}`)
                            .setDisabled(true)

                        const buttons = [dfirst, dprevious, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [embeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }

                    if (i.customId === "previous") {
                        currentPage--

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${embeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [dfirst, dprevious, page, next, last]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [embeds[currentPage - 1]],
                            components: currentPage > 1 ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "next") {
                        currentPage++

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${embeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [first, previous, page, dnext, dlast]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [embeds[currentPage - 1]],
                            components: currentPage < embeds.length ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "last") {
                        currentPage = embeds.length

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${embeds.length}`)
                            .setDisabled(true)

                        const buttons = [first, previous, page, dnext, dlast]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [embeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }
                });

                collector2.on('end', (mes, r) => {
                    if (r == 'time') {
                        let lpage = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${embeds.length}`)
                            .setDisabled(true)

                        const dbutts = [dfirst, dprevious, lpage, dnext, dlast]
                        const dmenu = new Discord.MessageSelectMenu()
                            .setCustomId('select')
                            .setPlaceholder('Select an option')
                            .setDisabled(true)
                            .addOptions([
                                { label: 'Help Menu', value: 'Help Menu' },
                                { label: 'Commands', value: 'COmmands' },
                                { label: 'Reviews', value: 'Reviews' },
                            ])

                        helpembed.edit({
                            embeds: [embeds[currentPage - 1]],
                            components: [new Discord.MessageActionRow().addComponents(dmenu), new Discord.MessageActionRow().addComponents(dbutts)]
                        })
                    }
                })

            }
            if (value === "Reviews") {
                let first = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`first3`)
                let dfirst = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`dfirst3`).setDisabled(true)

                let previous = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`previous3`)
                let dprevious = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`dprevious3`).setDisabled(true)

                let next = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`next3`)
                let dnext = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`dnext3`).setDisabled(true)

                let last = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`last3`)
                let dlast = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`dlast3`).setDisabled(true)

                let currentPage = 1
                let page = new Discord.MessageButton()
                    .setStyle('SECONDARY')
                    .setCustomId(`page`)
                    .setLabel(`${currentPage}/${reviewembeds.length}`)
                    .setDisabled(true)

                let butts = [dfirst, dprevious, page, next, last]
                helpembed.edit({ attachments: [], embeds: [reviewembeds[0]], components: [menu, new Discord.MessageActionRow().addComponents(butts)] })

                const collector4 = await helpembed.createMessageComponentCollector({ filter: filter, componentType: "BUTTON" });

                collector4.on("collect", async (i) => {
                    //i.deferUpdate()
                    if (i.customId !== "first3" && i.customId !== "previous3" && i.customId !== "next3" && i.customId !== "last3") return;
                    if (i.customId === "first3") {
                        currentPage = 1

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${reviewembeds.length}`)
                            .setDisabled(true)

                        const buttons = [dfirst, dprevious, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [reviewembeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }

                    if (i.customId === "previous3") {
                        currentPage--

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${reviewembeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [dfirst, dprevious, page, next, last]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [reviewembeds[currentPage - 1]],
                            components: currentPage > 1 ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "next3") {
                        currentPage++

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${reviewembeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [first, previous, page, dnext, dlast]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [reviewembeds[currentPage - 1]],
                            components: currentPage < reviewembeds.length ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "last3") {
                        currentPage = reviewembeds.length

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${reviewembeds.length}`)
                            .setDisabled(true)

                        const buttons = [first, previous, page, dnext, dlast]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [reviewembeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }
                });
            }
            if (value === "Banners") {
                let first = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`first2`)
                let dfirst = new Discord.MessageButton().setEmoji('<:first2:926539374546542622>').setStyle('SECONDARY').setCustomId(`dfirst2`).setDisabled(true)

                let previous = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`previous2`)
                let dprevious = new Discord.MessageButton().setEmoji('<:back2:926539569623613472>').setStyle('SECONDARY').setCustomId(`dprevious2`).setDisabled(true)

                let next = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`next2`)
                let dnext = new Discord.MessageButton().setEmoji(`<:next2:926539617350611005>`).setStyle('SECONDARY').setCustomId(`dnext2`).setDisabled(true)

                let last = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`last2`)
                let dlast = new Discord.MessageButton().setEmoji(`<:last2:926539452371857438>`).setStyle('SECONDARY').setCustomId(`dlast2`).setDisabled(true)

                let currentPage = 1
                let page = new Discord.MessageButton()
                    .setStyle('SECONDARY')
                    .setCustomId(`page`)
                    .setLabel(`${currentPage}/${bannerembeds.length}`)
                    .setDisabled(true)

                let butts = [dfirst, dprevious, page, next, last]
                helpembed.edit({ attachments: [], embeds: [bannerembeds[0]], components: [menu, new Discord.MessageActionRow().addComponents(butts)] })

                const collector3 = await helpembed.createMessageComponentCollector({ filter: filter, componentType: "BUTTON" });

                collector3.on("collect", async (i) => {
                    //i.deferUpdate()
                    if (i.customId !== "first2" && i.customId !== "previous2" && i.customId !== "next2" && i.customId !== "last2") return;
                    if (i.customId === "first2") {
                        currentPage = 1

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${bannerembeds.length}`)
                            .setDisabled(true)

                        const buttons = [dfirst, dprevious, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [bannerembeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }

                    if (i.customId === "previous2") {
                        currentPage--

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${bannerembeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [dfirst, dprevious, page, next, last]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [bannerembeds[currentPage - 1]],
                            components: currentPage > 1 ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "next2") {
                        currentPage++

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${bannerembeds.length}`)
                            .setDisabled(true)

                        const dbuttons = [first, previous, page, dnext, dlast]
                        const dcomponents = new Discord.MessageActionRow().addComponents(dbuttons)
                        const buttons = [first, previous, page, next, last]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [bannerembeds[currentPage - 1]],
                            components: currentPage < bannerembeds.length ? [menu, components] : [menu, dcomponents],
                        }).catch(() => { })
                    }

                    if (i.customId === "last2") {
                        currentPage = bannerembeds.length

                        let page = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${bannerembeds.length}`)
                            .setDisabled(true)

                        const buttons = [first, previous, page, dnext, dlast]
                        const components = new Discord.MessageActionRow().addComponents(buttons)

                        i.update({
                            embeds: [bannerembeds[currentPage - 1]],
                            components: [menu, components],
                        }).catch(() => { })
                    }
                });

                collector3.on('end', (mes, r) => {
                    if (r == 'time') {
                        let lpage = new Discord.MessageButton()
                            .setStyle('SECONDARY')
                            .setCustomId(`page`)
                            .setLabel(`${currentPage}/${bannerembeds.length}`)
                            .setDisabled(true)

                        const dbutts = [dfirst, dprevious, lpage, dnext, dlast]
                        const dmenu = new Discord.MessageSelectMenu()
                            .setCustomId('select')
                            .setPlaceholder('Select an option')
                            .setDisabled(true)
                            .addOptions([
                                { label: 'Help Menu', value: 'Help Menu' },
                                { label: 'Commands', value: 'COmmands' },
                                { label: 'Reviews', value: 'Reviews' },
                            ])

                        helpembed.edit({
                            embeds: [bannerembeds[currentPage - 1]],
                            components: [new Discord.MessageActionRow().addComponents(dmenu), new Discord.MessageActionRow().addComponents(dbutts)]
                        })
                    }
                })

            }
            if (value === "Info") {
                const info = { "fields": [{ "name": "Made with", "value": ">>> <:node:939040581097771028> **[Node.js](https://nodejs.org/en/)**\n```\nNode.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.\n```\n<:djs:939043382083354635> **[Discord.js](https://discord.js.org)**\n```\nDiscord.js is a powerful Node.js module that allows you to interact with the Discord API very easily.\n```\n<:mongo:939040399736045618> **[MongoDB](https://www.mongodb.com)**\n```\nMongoDB is an open source NoSQL database management program. It quite useful for working with large sets of distributed data.\n``` \n<:pebble:939052090028863508> **[PebbleHost](https://pebblehost.com)**\n```\nAffordable Dedicated Server Hosting. PebbleHost offers high quality dedicated servers with premium support all for a budget price.\n```", "inline": false }], "title": "**Information about us**", "description": "> Our aim was to mainly share our work for a price. Good quality custom bots which will help you to manage your server better and make work efficient. Everything was made from scratch unlike ||redbots||\n> \n> → <:im_kat:936974561281441792> **[Senpai#2473](https://discordapp.com/users/654639494481313792)**\n> → <:im_mushy:936974263360045066> **[lightninbolt986#3111](https://discordapp.com/users/543031298130837510)**\n‌", "color": 16575144 }
                helpembed.edit({ attachments: [], embeds: [info], components: [menu] })
            }
            if (value === "Prices") {
                helpembed.edit({ attachments: [], embeds: [prices], components: [menu] })
            }
        })

        const dmenu = new Discord.MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('Select an option')
            .setDisabled(true)
            .addOptions([
                { label: 'Help Menu', value: 'Help Menu' },
                { label: 'Commands', value: 'COmmands' },
                { label: 'Reviews', value: 'Reviews' },
            ])

        collector.on("end", (mes, r) => {
            if (r == "time") {
                helpembed.edit({
                    components: [new Discord.MessageActionRow().addComponents(dmenu)]
                }).catch(() => { })
            }
        });
    }

})
