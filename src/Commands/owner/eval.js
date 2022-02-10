const Discord = require('discord.js');
const Command = require("../../Structures/Command");

const config = require("../../Data/config.json")
const colors = require("../../Data/colors.json")
const imglinks = require("../../Data/imglinks.json")
const emotes = require("../../Data/emotes.json")


module.exports = new Command({
    name: "eval",
    description: "Evaluation cmd",
    permission: {
        bot: ['SEND_MESSAGES', 'EMBED_LINKS', 'USE_EXTERNAL_EMOJIS'],
        user: ['SEND_MESSAGES']
    },
    owner: true, 
    usage: "eval <args>",
    async run(message, args, client) {
        const errlog = client.channels.cache.get("906575123769872384")
        //if (message.author.id !== '654639494481313792' && message.author.id !== '543031298130837510') return message.reply("You are not an owner");
        //   replace with your id  ^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ optional 2nd owner. You can remove this
        let code = args.slice(1).join(" ")
        if (!code) return message.reply('You need to eval something.')
        try {

            if (code.includes('client.token'))
                return message.reply('fuck off');
            var evaled = eval(code);

            if (typeof evaled !== 'string')
                evaled = require('util').inspect(evaled);

            let embed;
            if (code.length > 1024) {
                embed = new Discord.MessageEmbed()
                    .setColor('#a7ff85')
                    .setDescription(`**📥 Input:**\n\`\`\`${code.slice(0, 1021)} ...\`\`\``)
                    .addField(
                        '📤 Output: ',
                        `\`\`\`js\n${clean(evaled)}\n\`\`\``
                    )
            } else {
                embed = new Discord.MessageEmbed()
                    .setColor('#a7ff85')
                    .addField('📥 Input: ', `\`\`\`${code}\`\`\``)
                    .addField(
                        '📤 Output: ',
                        `\`\`\`js\n${clean(evaled)}\n\`\`\``
                    )
            }
            message.channel.send({ embeds: [embed] });

        } catch (err) {
            let embed;
            if (code.length > 1024) {
                embed = new Discord.MessageEmbed()
                    .setColor('#ff8585')
                    .setDescription(`**📥 Input:**\n\`\`\`${code.slice(0, 1021)} ...\`\`\``)
                    .addField(
                        '📤 Output: ',
                        `\`\`\`${clean(err)}\`\`\``
                    );
            }
            else {
                embed = new Discord.MessageEmbed()
                    .setColor('#ff8585')
                    .addField('📥 Input: ', `\`\`\`${code}\`\`\``)
                    .addField(
                        '📤 Output: ',
                        `\`\`\`${clean(err)}\`\`\``
                    );
            }

            message.channel.send({ embeds: [embed] });

        }

        function clean(text) {
            if (typeof text === 'string')
                return text
                    .replace(/`/g, '`' + String.fromCharCode(8203))
                    .replace(/@/g, '@' + String.fromCharCode(8203));
            else return text;
        }

    }
})