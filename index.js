console.clear();
const Client = require("./src/Structures/Client.js");
const config = require("./src/Data/config.json");
const client = new Client();
const Discord = require("discord.js");
//const { DiscordUNO } = require('discord-uno')
const { GiveawaysManager } = require('discord-giveaways');

const mongoose = require('mongoose')

mongoose.connect(config.mongooseConnectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log(`connected to database`))

process.on('unhandledRejection', (error) => {
  console.log(error)
  client.channels.cache.get("906575123769872384").send(
    {
      embeds: [new Discord.MessageEmbed()
        .setAuthor("Unhandled Rejection Error", "https://media.discordapp.net/attachments/909344848761466881/914921123261603890/PicsArt_11-29-10.19.20.png")
        //.addField("Command info", `\`\`\`yaml\nServer: ${message.guild.name} (${message.guild.id})\nCommand: ${args[0]}\n\`\`\``)
        //.addField("Content", `\`\`\`yaml\n${message.content}\n\`\`\``)
        .addField("Error", `\`\`\`yaml\n${error}\n\`\`\``)
        .setColor("#ff3235")
      ],
      content: '<@&907611368784535582>'
    })
})

client.on('interactionCreate', async (i) => {
  if (i.isSelectMenu()) {
    if (i.customId === 'Dank self roles') {
      let addroles = []
      let removeroles = []
      let added

      await i.values.forEach(async (value) => {
        if (i.member.roles.cache.has(value)) { removeroles.push(value) }
        else { addroles.push(value) }
      });

      if (addroles.length >= 1) {
        addroles.forEach(async (role) => {
          try {
            i.member.roles.add(role)
            added = 'true'
          }
          catch (error) {
            added = 'false'
          }

        })
      }
      if (removeroles.length >= 1) {
        removeroles.forEach(async (role) => {
          i.member.roles.remove(role)
        })
      }
      let rembed = new Discord.MessageEmbed()
        .setColor("BLURPLE")

      if (added = "true") {
        rembed.setColor("BLURPLE")
        if (addroles.length >= 1) {
          rembed.addField("Added the following roles", `<:blurple_arrow:927855594801606747><@&${addroles.join(">\n<:blurple_arrow:927855594801606747><@&")}>`)
        } else if (addroles.length == 1) {
          rembed.addField("Added the following role", `<:blurple_arrow:927855594801606747><@&${addroles}>`)
        }
        if (removeroles.length >= 1) {
          rembed.addField("Removed the following roles", `<:blurple_arrow:927855594801606747><@&${removeroles.join(">\n<:blurple_arrow:927855594801606747><@&")}>`)
        } else if (removeroles.length == 1) {
          rembed.addField("Removed the following role", `<:blurple_arrow:927855594801606747><@&${removeroles}>`)
        }
      }
      else if (added = 'false') {
        rembed.setDescription("<:nx_cross:914921124670890064> Couldn't add/remove roles for you.")
        rembed.setColor("#ff3235")
      }

      await i.reply({
        embeds: [rembed],
        ephemeral: true
      })
    }

    if (i.customId === 'Minigame self roles') {
      let addroles = []
      let removeroles = []
      let added

      await i.values.forEach(async (value) => {
        if (i.member.roles.cache.has(value)) { removeroles.push(value) }
        else { addroles.push(value) }
      });

      if (addroles.length >= 1) {
        addroles.forEach(async (role) => {
          try {
            i.member.roles.add(role)
            added = 'true'
          }
          catch (error) {
            added = 'false'
          }

        })
      }
      if (removeroles.length >= 1) {
        removeroles.forEach(async (role) => {
          i.member.roles.remove(role)
        })
      }
      let rembed = new Discord.MessageEmbed()
        .setColor("BLURPLE")

      if (added = "true") {
        rembed.setColor("BLURPLE")
        if (addroles.length >= 1) {
          rembed.addField("Added the following roles", `<:blurple_arrow:927855594801606747><@&${addroles.join(">\n<:blurple_arrow:927855594801606747><@&")}>`)
        } else if (addroles.length == 1) {
          rembed.addField("Added the following role", `<:blurple_arrow:927855594801606747><@&${addroles}>`)
        }
        if (removeroles.length >= 1) {
          rembed.addField("Removed the following roles", `<:blurple_arrow:927855594801606747><@&${removeroles.join(">\n<:blurple_arrow:927855594801606747><@&")}>`)
        } else if (removeroles.length == 1) {
          rembed.addField("Removed the following role", `<:blurple_arrow:927855594801606747><@&${removeroles}>`)
        }
      }
      else if (added = 'false') {
        rembed.setDescription("<:nx_cross:914921124670890064> Couldn't add/remove roles for you.")
        rembed.setColor("#ff3235")
      }

      await i.reply({
        embeds: [rembed],
        ephemeral: true
      })
    }
  }
})
client.snipes = []
client.start(config.token)
