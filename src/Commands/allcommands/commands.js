const Discord = require('discord.js');
const Command = require("../../Structures/Command.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")


module.exports = new Command({
    name: 'commands',
    description: 'command',
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ["command", "shop"],
    usage: "syntax: n.",
    async run(message, args, client) {

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

        const embeds = [icalc, heiststats, amarishop, dnsystem, channelmanager, armanager, afksystem, snipes, race, statusrole, broles]

        let first = new Discord.MessageButton()
            .setEmoji('<:first2:926539374546542622>')
            .setStyle('SECONDARY')
            .setCustomId(`first`)

        let previous = new Discord.MessageButton()
            .setEmoji('<:back2:926539569623613472>')
            .setStyle('SECONDARY')
            .setCustomId(`previous`)

        let next = new Discord.MessageButton()
            .setEmoji(`<:next2:926539617350611005>`)
            .setStyle('SECONDARY')
            .setCustomId(`next`)

        let last = new Discord.MessageButton()
            .setEmoji(`<:last2:926539452371857438>`)
            .setStyle('SECONDARY')
            .setCustomId(`last`)

        let dfirst = new Discord.MessageButton()
            .setEmoji('<:first2:926539374546542622>')
            .setStyle('SECONDARY')
            .setCustomId(`dfirst`)
            .setDisabled(true)

        let dprevious = new Discord.MessageButton()
            .setEmoji('<:back2:926539569623613472>')
            .setStyle('SECONDARY')
            .setCustomId(`dprevious`)
            .setDisabled(true)

        let dnext = new Discord.MessageButton()
            .setEmoji(`<:next2:926539617350611005>`)
            .setStyle('SECONDARY')
            .setCustomId(`dnext`)
            .setDisabled(true)

        let dlast = new Discord.MessageButton()
            .setEmoji(`<:last2:926539452371857438>`)
            .setStyle('SECONDARY')
            .setCustomId(`dlast`)
            .setDisabled(true)

        let currentPage = 1

        let page = new Discord.MessageButton()
            .setStyle('SECONDARY')
            .setCustomId(`page`)
            .setLabel(`${currentPage}/${embeds.length}`)
            .setDisabled(true)


        let butts = [dfirst, dprevious, page, next, last]
        const m = await message.reply({ embeds: [embeds[0]], components: [new Discord.MessageActionRow().addComponents(butts)] })
        const filter = (b) => { if (b.user.id === message.author.id) return true; return b.reply({ content: "<:nx_cross:914921124670890064> These are not for you.", ephemeral: true }) };
        const collector = await m.createMessageComponentCollector({ filter: filter, time: 300000 });


        collector.on("collect", async (i) => {
            i.deferUpdate()
            if (i.customId === "first") {
                currentPage = 1

                let page = new Discord.MessageButton()
                    .setStyle('SECONDARY')
                    .setCustomId(`page`)
                    .setLabel(`${currentPage}/${embeds.length}`)
                    .setDisabled(true)

                const buttons = [dfirst, dprevious, page, next, last]
                const components = new Discord.MessageActionRow().addComponents(buttons)

                m.edit({
                    embeds: [embeds[currentPage - 1]],
                    components: [components],
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

                m.edit({
                    embeds: [embeds[currentPage - 1]],
                    components: currentPage > 1 ? [components] : [dcomponents],
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

                m.edit({
                    embeds: [embeds[currentPage - 1]],
                    components: currentPage < embeds.length ? [components] : [dcomponents],
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

                m.edit({
                    embeds: [embeds[currentPage - 1]],
                    components: [components],
                }).catch(() => { })
            }
        });

        collector.on('end', (mes, r) => {
            if (r == 'time') {
                let lpage = new Discord.MessageButton()
                    .setStyle('SECONDARY')
                    .setCustomId(`page`)
                    .setLabel(`${currentPage}/${embeds.length}`)
                    .setDisabled(true)

                const dbutts = [dfirst, dprevious, lpage, dnext, dlast]
                m.edit({ embeds: [embeds[currentPage - 1]], components: [new Discord.MessageActionRow().addComponents(dbutts)] })
            }
        })
    }
})