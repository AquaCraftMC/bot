const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "helperadd",
    aliases: ["addhelper", "addstaff"],
    description: "DMs a new staff member with links to staff resources, and gives them the <@&835226911198019584> role",
    cooldown: 0,
    perms: ["ADMINISTRATOR"],
    arguments: ["User"],

    execute: async function(client, message, args) {
       let newStaffMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);

       message.delete({ timeout: 20 })

       let notFoundEmbed = new MessageEmbed()
       .setTitle('Ah, yes.')
       .setDescription(`I would help you add THE GODDAM AIR to the staff team but I can't be bothered to. How about *actually mentioning someone*?`)
       .setColor(EMBED_COLOR)
       .setFooter(`Blame ${message.author.username}#${message.author.discriminator}, they are the idiot`, `${message.author.displayAvatarURL()}`)
       .setTimestamp()
       
       if (!newStaffMember) return message.channel.send(notFoundEmbed)
       .then(msg => {
         msg.delete({ timeout: 20000 })
       }).catch(console.error)

       let newStaffEmbed = new MessageEmbed()
       .setTitle(':tada: Congratulations!')
       .setDescription('Your application has been **accepted** to join the **AquaCraft Staff Team**!\n\nStaff Discord Link: [Soon:tm:]')
       .setColor(EMBED_COLOR)
      
      newStaffMember.send(newStaffEmbed);
      
      let helperRole = message.guild.roles.cache.get('835226911198019584')

      let addedEmbed = new MessageEmbed()
      .setTitle('Added!')
      .setDescription(`Added user ${newStaffMember} to the **Staff Team** under rank \`Helper\``)
      .setColor(EMBED_COLOR)
      .setTimestamp()
      .setFooter(`${message.author.username}#${message.author.discriminator} added ${newStaffMember}`, `${message.author.displayAvatarURL()}`)
       
       message.channel.send(addedEmbed);
       newStaffMember.roles.add(['835226911198019584', '835277476988715038']);

       let rolesAdded = new MessageEmbed()
       .setTitle('Roles Updated!')
       .setDescription(`The following roles have been updated for \`${newStaffMember.tag}\``)

       message.channel.send(rolesAdded);
       
  }
};