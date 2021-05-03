const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "staffsuggest",
    aliases: ["staffsugg", "staffsuggestion"],
    description: "Sends a suggestion to the staff discord",
    cooldown: 0,
    perms: [],
    arguments: [],

    execute: async function(client, message, args) {
		message.delete({timeout: 20})
		
		let suggText = args.slice(0).join(" ");
		let suggChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("837043546904723539");
		
		let notHere = new MessageEmbed()
		.setTitle(':x: Not here!')
		.setDescription('This command can only be used in the <#837043051623874630> channel of the **AquaCraft Staff Discord**!')
		.setColor(EMBED_COLOR)
		.setTimestamp()
		
		let noSugg = new MessageEmbed()
		.setTitle(':x: No Suggestion!')
		.setDescription('I hate to be sarcastic... but if you\'re gonna suggest something, maybe actually attach a suggestion?\nJust an idea. Wouldn\'t put it past you.')
		.setColor(EMBED_COLOR)
		.setTimestamp()
		
		let suggEmbed = new MessageEmbed()
		.setTitle('💡 New Suggestion!')
		.setDescription(suggText)
		.setColor(EMBED_COLOR)
		.setTimestamp()
		.setFooter(`Suggested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
		
		if (!['837043051623874630'].includes(message.channel.id)) {
			message.delete()
			return message.reply(notHere)
				.then(msg => {
					msg.delete({ timeout: 10000 })
					}).catch(console.error);
        }
		
		if (!suggText) {
			return message.reply(noSugg)
				.then(msg => {
					msg.delete({timeout: 5000, reason: "Auto-Deletion"})
				}).catch(console.error)
		}
		
		if (suggText) {
			suggChannel.send(suggEmbed)
				.then(msg => {
					msg.react("<:upvote:838773520510484510>")
					msg.react("<:downvote:838773520473128991>")
				})
		}
    }
}