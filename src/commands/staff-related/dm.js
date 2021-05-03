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
       let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
       
       if (!dUser) return message.channel.send("Can't find user!");
       
       let dMessage = args.join(' ').slice(22);
       if (dMessage.length < 1) return message.reply('You must supply a message!');
       
       dUser.send(`${dMessage}`);
       
       message.channel.send(`**${message.author}**, You have sent a message to ${dUser}!`);
       
  }
};