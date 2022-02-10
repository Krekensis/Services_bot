const Discord = require("discord.js");
const Event = require("../Structures/Event.js");
const Timeout = new Discord.Collection()
const ms = require("ms")
const moment = require("moment")
const colors = require('../Data/colors.json')
const emotes = require("../Data/emotes.json")
const imglinks = require("../Data/imglinks.json")
const ownerModel = require('../Models/owner');
const prefixSchema = require('../Models/prefix')

module.exports = new Event("messageCreate", async (client, message, member) => {

  let prefix
  const data = await prefixSchema.findOne({ Guild: message.guild.id }).catch(err => console.log(err))

  if (data) { prefix = data.Prefix }
  else { prefix = "-" }

  client.prefix = prefix

  if (message.author.bot) return;

  let cntnt
  if (message.content.length > 1000) { cntnt = message.content.slice(0, 997) + `...` }
  else { cntnt = message.content }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[ COMMAND HANDLER ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (!message.content.startsWith(client.prefix)) return;

  const args = message.content.substring(client.prefix.length).split(/ +/);

  const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(a => a.aliases && a.aliases.includes(args[0].toLowerCase()))
  if (!command) return;

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[ PERMISSION HANDLER ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (command.permission) {
    const permissions = {
      "CREATE_INSTANT_INVITE": "Create Invite",
      "KICK_MEMBERS": "Kick Members",
      "BAN_MEMBERS": "Ban Members",
      "ADMINISTRATOR": "Admin",
      "MANAGE_CHANNELS": "Manage Channels",
      "MANAGE_GUILD": "Managa Guild",
      "ADD_REACTIONS": "Add Reactions",
      "VIEW_AUDIT_LOG": "View Audit Log",
      "PRIORITY_SPEAKER": "Priority Speaker",
      "STREAM": "Stream",
      "VIEW_CHANNEL": "View Channel",
      "SEND_MESSAGES": "Send Messages",
      "SEND_TTS_MESSAGES": "Send TTS Messages",
      "MANAGE_MESSAGES": "Manage Messages",
      "EMBED_LINKS": "Embed Links",
      "ATTACH_FILES": "Attach Files",
      "READ_MESSAGE_HISTORY": "Read Message History",
      "MENTION_EVERYONE": "Mention Everyone",
      "USE_EXTERNAL_EMOJIS": "Use External Emotes",
      "VIEW_GUILD_INSIGHTS": "View Guild Insights",
      "CONNECT": "Connect",
      "SPEAK": "Speak",
      "MUTE_MEMBERS": "Mute Members",
      "DEAFEN_MEMBERS": "Deafen Members",
      "MOVE_MEMBERS": "Move Members",
      "USE_VAD": "Use VAD",
      "CHANGE_NICKNAME": "Change Nickanme",
      "MANAGE_NICKNAMES": "Manage Nickname",
      "MANAGE_ROLES": "Manage Roles",
      "MANAGE_WEBHOOKS": "Manage Webhooks",
      "MANAGE_EMOJIS_AND_STICKERS": "Manage Emojis & Stickers",
      "USE_APPLICATION_COMMANDS": "Use Application Commands",
      "REQUEST_TO_SPEAK": "Request To Speak",
      "MANAGE_EVENTS": "Manage Events",
      "MANAGE_THREADS": "Manage Threads",
      "CREATE_PUBLIC_THREADS": "Create Public Threads",
      "CREATE_PRIVATE_THREADS": "Create Private Threads",
      "USE_EXTERNAL_STICKERS": "Use External Stickers",
      "SEND_MESSAGES_IN_THREADS": "Send Messages in Threads",
      "START_EMBEDDED_ACTIVITIES": "Start Embedded Activities"
    }
    const bperm = command.permission.bot
    const uperm = command.permission.user

    let finalbperms = []
    let finaluperms = []

    bperm.forEach(b => {
      finalbperms.push(message.guild.me.permissions.has(b) ? `${emotes.tick} \`${permissions[b]}\`` : `${emotes.cross} \`${permissions[b]}\``)
    })
    uperm.forEach(u => {
      finaluperms.push(message.member.permissions.has(u) ? `${emotes.tick} \`${permissions[u]}\`` : `${emotes.cross} \`${permissions[u]}\``)
    })
    try {
      if (!message.guild.me.permissions.has(bperm)) {
        message.reply({
          embeds: [new Discord.MessageEmbed()
            .setColor(colors.red)
            .setThumbnail('https://images-ext-2.discordapp.net/external/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak/https/media.discordapp.net/attachments/909344848761466881/914774250219511848/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png')
            .setAuthor("No permissions", imglinks.nx_crossemote)
            .setDescription(`Looks like <@${client.user.id}> is missing the following permissions to execute this command.\n\n>>> ${finalbperms.join("\n")}`)
          ],
          allowedMentions: { repliedUser: true }
        })
        return;
      }
    } catch (e) {
      message.member.send({
        content: `${emotes.cross} Please give me \`Embed Link\` permissions to function properly`,
      })
      return;
    }
    if (!message.member.permissions.has(uperm)) {
      message.reply({
        embeds: [new Discord.MessageEmbed()
          .setColor(colors.red)
          .setThumbnail('https://images-ext-2.discordapp.net/external/TLvA6RAOze3jWk_uDiSWQaZr6q7pNze0sCMmy4dImak/https/media.discordapp.net/attachments/909344848761466881/914774250219511848/1qrL0Pk2sWbLmTcHh5f4iMTW8478OwNG4P8BP9wIb9U4JZUAAAAASUVORK5CYII.png')
          .setAuthor("No permissions", imglinks.nx_crossemote)
          .setDescription(`Looks like you are missing the following permissions to use this command.\n\n>>> ${finaluperms.join("\n")}`)
        ],
        allowedMentions: { repliedUser: true }
      })
      return;
    }

  }
  if (command.nsfw) {
    if (!message.channel.nsfw) {
      message.reply({
        embeds: [new Discord.MessageEmbed()
          .setColor(colors.red)
          .setAuthor("Hold Up!", imglinks.nx_crossemote)
          .setDescription("There are children here. <a:neo_chikabonk:875629288437723187>\nNSFW commands can only be run in nsfw channels.")
          .setImage("https://imgur.com/oe4iK5i.gif")],
        allowedMentions: { repliedUser: true }
      })
      return;
    }
  }
  if (command.owner) {
    const ownerData = await ownerModel.findOne({
      userID: message.author.id
    });

    if (!ownerData) {
      message.reply({
        embeds: [new Discord.MessageEmbed()
          .setColor(colors.red)
          .setAuthor("Not owner", imglinks.nx_crossemote)
          .setDescription("Sorry mate, but this is a potentially dangerous or confidential command which can be used only by owners.")
        ],
        allowedMentions: { repliedUser: true }
      })
      return;
    }
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[ COOLDOWN HANDLER ]━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (command.cooldown) {
    if (Timeout.has(`${command.name}${message.author.id}`)) {
      return message.reply({
        embeds: [new Discord.MessageEmbed()
          .setColor(colors.red)
          .setDescription(`<:nx_cross:914921124670890064> ***Woah! Chill out.***\n<:bp_rrc:915308222871650364> Have some patience, don't try to break me.\n<:bp_rrc:915308222871650364> You can use __${command.name}__ again in \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), { long: false })}\`\n<:bp_rr:915308283936514108> Default cooldown for this command is \`${ms(command.cooldown, { long: false })}\``)],

        allowedMentions: { repliedUser: true }
      })
    }
    else {
      command.run(message, args, client).catch(error => {
        console.log(error)
        const errchannel = client.channels.cache.get('906575123769872384')
        errchannel.send(
          {
            embeds: [new Discord.MessageEmbed()
              .setColor("#ff3235")
              .setAuthor("Unhandled Rejection Error", "https://media.discordapp.net/attachments/909344848761466881/914921123261603890/PicsArt_11-29-10.19.20.png")
              .addFields(
                { name: "Content", value: `\`\`\`${cntnt}\`\`\`` },
                { name: "Error", value: `\`\`\`yaml\n${error}\n\`\`\`` },
              )
              .setFooter(`${message.guild.name} | ${message.guild.id}`)],
            content: '<@&907611368784535582>'
          })
      })
      Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
      setTimeout(() => {
        Timeout.delete(`${command.name}${message.author.id}`)
      }, command.cooldown)
    }
  }

  if (!command.cooldown) {
    command.run(message, args, client).catch(error => {
      console.log(error)
      const errchannel = client.channels.cache.get('906575123769872384')
      errchannel.send(
        {
          embeds: [new Discord.MessageEmbed()
            .setColor("#ff3235")
            .setAuthor("Unhandled Rejection Error", "https://media.discordapp.net/attachments/909344848761466881/914921123261603890/PicsArt_11-29-10.19.20.png")
            .addFields(
              { name: "Content", value: `\`\`\`${cntnt}\`\`\`` },
              { name: "Error", value: `\`\`\`yaml\n${error}\n\`\`\`` },
            )
            .setFooter(`${message.guild.name} | ${message.guild.id}`)],
          content: '<@&907611368784535582>'
        })
    })
  }

});