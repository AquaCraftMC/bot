const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "esay",
    aliases: ["erepeat", "erepeatafterme"],
    description: "Says what you tell the bot to say in an embed!",
    cooldown: 0,
    perms: [],

    execute: async function(client, message, args) {

      message.delete({ timeout: 1 });

      let nomsgEmbed = new MessageEmbed()
      .setTitle('🤐 Nothing to say?')
      .setColor(EMBED_COLOR)

      if (!args.length)
          return message.channel.send(nomsgEmbed);
      
      const eSayMessage = message.content.slice(5).trim();
      
      let eSayMessageE = new MessageEmbed()
      .setDescription(eSayMessage)
      .setColor(EMBED_COLOR)
      .setFooter(`Posted by ${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
      .setTimestamp()

      message.channel.send(eSayMessageE)


    }
}
