const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "dm",
    aliases: ["message", "dmuser"],
    description: "DM's a certain user with the content provided",
    cooldown: 0,
    perms: ["ADMINISTRATOR"],
    arguments: ["User", "Message"],

    execute: async function(client, message, args) {
      message.delete({ reason: "Auto-Deleting the command!"})
       let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
       
       let noUser = new MessageEmbed()
       .setTitle('🔎 Still Looking...')
       .setDescription('So...\nIf you wanted to send a DM to someone, would it not be smart to FUCKING PING THEM?\n\nTwat.')
       .setColor(EMBED_COLOR)
       .setTimestamp()

       if (!dUser) {
         return message.channel.send(noUser)
          .then(msg => {
            msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
          })
       }
       
       let noMessage = new MessageEmbed()
       .setTitle('🤔 Can one person really have this few IQ Points?')
       .setDescription('Ok cool, so uh you kinda like told me who to DM but didn\'t actually tell me who to DM.\nGreat job!')
       .setColor(EMBED_COLOR)
       .setTimestamp()

       let dMessage = args.join(' ').slice(22);
       if (dMessage.length < 1) {
         return message.channel.send(noMessage)
          .then(msg => {
            msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
          })
       }

       let dEmbed = new MessageEmbed()
       .setTitle('📩 You got mail!')
       .setDescription(`Message from **${message.author.tag}**:\n\n${dMessage}`)
       .setColor(EMBED_COLOR)
       .setTimestamp()
       
       dUser.send(dEmbed);

       let messageSent = new MessageEmbed()
       .setTitle('✅ Done!')
       .setDescription(`${message.author}, you have sent a message to ${dUser} successfully!`)
       .setColor(EMBED_COLOR)
       .setTimestamp()
       
       message.channel.send(messageSent)
        .then(msg => {
          msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
        })
       
  }
};