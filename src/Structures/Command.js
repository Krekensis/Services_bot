const Discord = require("discord.js");
const Client = require("./Client.js")

/**
 * 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function Runfunction(message, args, client) { }

class Command {
    /**
     * @typedef {{name: string, description: string, permission: Discord.PermissionString, aliases: Array, usage: string, cooldown: number, nsfw: boolean, owner: boolean, run: Runfunction}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.permission = options.permission;
        this.aliases = options.aliases;
        this.usage = options.usage;
        this.cooldown = options.cooldown
        this.nsfw = options.nsfw
        this.owner = options.owner
        this.run = options.run;
    }
}

module.exports = Command;