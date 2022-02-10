console.clear();
const Client = require("./src/Structures/Client.js");
const config = require("./src/Data/config.json");
const client = new Client();
const Discord = require("discord.js");
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
        .addField("Error", `\`\`\`yaml\n${error}\n\`\`\``)
        .setColor("#ff3235")
      ],
      content: '<@&907611368784535582>'
    })
})

client.snipes = []
client.start(config.token)
