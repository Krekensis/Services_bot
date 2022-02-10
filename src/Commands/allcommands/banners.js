const Discord = require('discord.js');
const Command = require("../../Structures/Command.js")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")


module.exports = new Command({
    name: 'banners',
    description: 'command',
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    aliases: ["art", "banner"],
    usage: "syntax: n.",
    async run(message, args, client) {

        const banner1 = new Discord.MessageEmbed()
        .setTitle("Banner Competition - Dank Zone")
        .setDescription("(Winner)")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/938727749558874153/PicsArt_09-01-12.42.31.png")

        const banner2 = new Discord.MessageEmbed()
        .setTitle("Banner Competition - Elite Empire")
        .setDescription("(Entry 1)")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/938727749907013633/PicsArt_01-06-01.05.56.jpg")

        const banner3 = new Discord.MessageEmbed()
        .setTitle("Banner Competition - Elite Empire")
        .setDescription("(Entry 2)")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/938727750406139904/Elite-Empire-Banner_3.jpg")

        const banner4 = new Discord.MessageEmbed()
        .setTitle("Banner Competition - Elite Empire")
        .setDescription("(Entry 3)")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/940184478880514118/w80ihvmIpuVkQAAAABJRU5ErkJggg.png")

        const icon12 = new Discord.MessageEmbed()
        .setTitle("Icon Competition - Elite Empire")
        .setDescription("(Winner)\n- <a:boost:940186051492843531> Nitro Boost")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/940182931610169344/vwFOyU8GhVSRVgAAAABJRU5ErkJggg.png")

        const amari = new Discord.MessageEmbed()
        .setTitle("Halloween Overlay Competition - AmariBot")
        .setDescription("(Winner)\n- <a:boost:940186051492843531> Nitro Boost\n- <:amaprem:940186401251663932> Amari Premium")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/940182408882438154/PicsArt_02-07-03.18.59.jpg")

        const hallow = new Discord.MessageEmbed()
        .setTitle("Halloween Banner - Dank Zone")
        .setImage("https://media.discordapp.net/attachments/847081128942370826/938727750821371904/PicsArt_10-10-05.33.37.jpg")

        const neox = new Discord.MessageEmbed()
        .setTitle("Background Banner - Neox")
        .setDescription("For my custom bot :)")
        .setImage("https://images-ext-2.discordapp.net/external/uJ3C0BMa6VC8f8jYeCVFygTu3HuYFNWMsHp_ZVgrYTA/https/media.discordapp.net/attachments/804352046534492250/918076805968195604/7997EAAAAASUVORK5CYII.png")

        //const embeds = [icalc, heiststats, amarishop, dnsystem, channelmanager, afksystem, snipes, race, statusrole, broles]
        const embeds = [banner1, banner2, banner3, banner4, icon12, amari, hallow, neox]

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