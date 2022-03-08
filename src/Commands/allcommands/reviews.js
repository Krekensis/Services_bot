const Command = require('../../Structures/Command.js')
const Discord = require("discord.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")

module.exports = new Command({
    name: "reviews",
    description: "Clear an amount of messages",
    permission: {
        bot: ['EMBED_LINKS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ['review', 'rating', 'rate'],
    usage: "reviews",
    async run(message, args, client) {

        const spooki = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> General module (`welcoming, selfroles`)\n<:nx_tick:910049767910952961> Server manager module (`prvt channel, prvt role, prvt ars`)\n<:nx_tick:910049767910952961> Donation module (`dnote, mydono, dn lb, dn req. system, itemnote`)\n<:nx_tick:910049767910952961> Utils module (`giveaways, heist system, itemcalc, amarishop, heiststats, afk, bulksnipe`)", "inline": false }, { "name": "<:am_b:938690505531858965> Review ★★★★★ `10/10`", "value": "```\nVery good bot. The embeds are very good and clean.\nIt provides very useful utilities like \"channel manager\" which makes managing the channels really easier. Shifted to this donation system because previous bot has been offline for too long. This donation system is similar to last one but has a progress bar which looks very cool. The bot is quite fast too and has a good uptime. It did take quite some time to complete this bot but overall 10/10 service.\n```", "inline": false }], "author": { "name": "Spooki#6969 — 428523095704207360", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949648502730936380/a_54faf5d7469f7668ece1d222fd0ad8b5.gif" }, "color": 16575144 }
        const zaexy = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Giveaway system`\n<:nx_tick:910049767910952961> `Tempban freeloader`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `8/10`", "value": "```\nThe bot is great, it works well and exceeds my expectations on what the bot could have turn out the output and embeds are one of the most unique designs I have ever seen, its truly one of a kind.\n```\n ", "inline": false }], "author": { "name": "ZÆXY#3349 — 648704448293765169", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949648713331146822/07d16ff8630fdec2242bed6f03391cf3.png" }, "color": 16575144 }
        const chico = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Giveaway system`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `9/10`", "value": "```\nIt is really good bot. I like the embeds but I want some more specific requirements (no. of messages) so a 9 for me.\n```\n ", "inline": false }], "author": { "name": "Chico ;)#3298 — 852793050467532870", "icon_url": "https://images-ext-2.discordapp.net/external/A86uLA_4KQ5pzKIQzxda4jNznGoipQLV7ycJe-G13cE/https/media.discordapp.net/attachments/892704135244283916/949648927832014888/78ba99650d20e4fcdcbc3daee6d2e16d.png" }, "color": 16575144 }
        const atulya = { "fields": [{ "name": "<:am_b:938690505531858965> Commands", "value": "<:nx_tick:910049767910952961> `Welcome system`\n<:nx_tick:910049767910952961> `Giveaway system`\n<:nx_tick:910049767910952961> `Tempban freeloader`\n<:nx_tick:910049767910952961> `Complete donation system`\n<:nx_tick:910049767910952961> `Advanced donation req. system`", "inline": false }, { "name": "<:am_b:938690505531858965> Review — ★★★★☆ `???`", "value": "```\nNo review yet\n```", "inline": false }], "author": { "name": "乛 Atulya ༘#9999 — 897455147196747818", "icon_url": "https://media.discordapp.net/attachments/892704135244283916/949722052590465064/a_671d21e81973d83ec0e0c3d30a32f09d.gif" }, "color": 16575144 }
        
        const embeds = [spooki, zaexy, chico, atulya]

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
        const collector = await m.createMessageComponentCollector({ filter: filter, time: 300000});


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
