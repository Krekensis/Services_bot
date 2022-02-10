const Command = require("../../Structures/Command.js")
const Discord = require("discord.js")
const { pagination } = require("../../Functions/pagination")

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")


module.exports = new Command({
  name: "guildlist",
  description: "Clear an amount of messages",
  permission: {
    bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
    user: ['SEND_MESSAGES']
  },
  usage: "",
  owner: true,

  async run(message, args, client) {
    const errlog = client.channels.cache.get("906575123769872384")

    let Guilds = []
    let embed = {}
    let embedslist = []
    client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).forEach((guild) => {
      Guilds.push(`\`${guild.id}\`│**${guild.name}** \`[${guild.memberCount}]\``)
    })
    var i, j, temporary, chunk = 15;
    for (i = 0, j = Guilds.length; i < j; i += chunk) {
      temporary = Guilds.slice(i, i + chunk);
      embed[`${i / 15}`] = new Discord.MessageEmbed()
        .setAuthor(`Guild list for ${client.user.username}`, client.user.displayAvatarURL())
        .setDescription(`Overall guilds \`[${Guilds.length}]\`\n${temporary.join(`\n`)}`)
        .setColor('BLURPLE')
    }
    for (let i = 0; i < (Object.keys(embed).length); i++) {
      embedslist.push(embed[i])
    }

    if (embedslist.length < 1) return message.channel.send('Bot in no guild, not possible')

    const filter = (b) => { if (b.user.id === message.author.id) return true; return b.reply({ content: "<:nx_cross:914921124670890064> This interaction is not for you.", ephemeral: true }) };
    await pagination({
      channel: message.channel,
      author: message.author,
      message: message,
      embeds: embedslist,
      customFilter: filter,
      fastSkip: true,
      button: [
        { name: "first", emoji: "<:first:926437951385239563>", style: "PRIMARY" },
        { name: "previous", emoji: "<:previous:926443075302227998>", style: "PRIMARY" },
        { name: "next", emoji: "<:next:926442830480703548>", style: "PRIMARY" },
        { name: "last", emoji: "<:last:926437800436465664>", style: "PRIMARY" },
      ],
      time: 300000,
    })

  }
})