const Discord = require("discord.js");
const Command = require("./Command.js");
const Event = require("./Event.js");
const config = require("../Data/config.json");

const intents = new Discord.Intents(32767);
const fs = require("fs");
class Client extends Discord.Client {

    /*
        this.commands.set(command.name, command);
                    if (command.aliases) command.aliases.forEach(a => this.aliases.set(a, command));
    */
    constructor() {
        super({
            intents, allowedMentions: {
                parse: ['users', 'roles'],
                repliedUser: false,
            }
        });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
        this.aliases = new Discord.Collection();
        this.prefix = config.prefix;
        this.afk = new Discord.Collection();
    }

    start(token) {
        const directory = fs.readdirSync('./src/Commands')
        directory.forEach(dir => {
            const commandFiles = fs.readdirSync(`./src/Commands/${dir}`)
                .filter(file => file.endsWith('.js'))
            /**
             * @type {Command[]}
             */
            const commands = commandFiles.map(file => require(`../Commands/${dir}/${file}`));
            commands.forEach(command => {
                console.log(`Command ${command.name} Loaded `)
                this.commands.set(command.name, command)
                if (command.aliases) command.aliases.forEach(a => this.aliases.set(a, command));
            });
        }
        )

        fs.readdirSync("./src/Events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../Events/${file}`);
                console.log(`Events ${event.event} loaded`);
                this.on(event.event, event.run.bind(null, this));
            });

        this.login(token);
    }
}

module.exports = Client;