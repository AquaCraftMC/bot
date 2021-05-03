const Discord = require('discord.js');
const got = require("got");
const PREFIX = require('../../../config/config.json').PREFIX;
const EMBED_COLOR = require('../../../config/config.json').EMBED_COLOR;
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "staffverify",
    aliases: ["staffdiscordverify"],
    description: "Checks your roles in the main discord, and gives you appropriate roles in the staff discord",
    cooldown: 0,
    perms: [],
    arguments: [],

    execute: async function(client, message, args) {
		message.delete()
		
		let nopeEmbed = new MessageEmbed()
		.setTitle('🤷‍♂️ But how?')
		.setDescription('You have uh... got into the staff discord... without being a staff member...\nVery sus.\n\nOh well, hope you had fun. You have been kicked from the Staff Discord!')
		.setColor(EMBED_COLOR)
		.setTimestamp()
		.setFooter(`Imagine trying that ${message.author.tag}, smh.`, `${message.author.displayAvatarURL()}`)
		
		let outsiderEmbed = new MessageEmbed()
		.setTitle(':x: Outsider Kicked.')
		.setDescription(`Punishment information:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Kicked\n» **Reason:** Failed command \`-StaffVerify\``)
		.setColor(EMBED_COLOR)
		.setTimestamp()
		.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
		
        let mainGuild = client.guilds.cache.get('835225349377228910')
        let member = mainGuild.members.cache.get(message.author.id)
		let staffDiscord = message.client.guilds.cache.get('836652146602410004')
		let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
		let staffMember = message.guild.member(message.author.id)
		
		if (member.roles.cache.some(role => role.id === '835277476988715038')) {
			if (member.roles.cache.some(role => role.id === '835226913257029632')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652881666375750"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let builderEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `Builder`')
				.setColor('#ffff55')
				.setTimestamp()
				
				let builderAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Builder`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Builder\`!`)
				.setColor('#ffff55')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(builderEmbed)
				message.channel.send(builderEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(builderAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835226911198019584')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652853573058600"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836654154138648606"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let helperEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `Helper`')
				.setColor('#55ff55')
				.setTimestamp()
				
				let helperAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Helper`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Helper\`!`)
				.setColor('#55ff55')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(helperEmbed)
				message.channel.send(helperEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(helperAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835226905111560224')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652826935164960"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653975486464090"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let jrModEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `JrMod`')
				.setColor('#ff55ff')
				.setTimestamp()
				
				let jrModAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `JrMod`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`JrMod\`!`)
				.setColor('#ff55ff')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(jrModEmbed)
				message.channel.send(jrModEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(jrModAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835226901630550086')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652738649522216"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653975486464090"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let modEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `Mod`')
				.setColor('#aa00aa')
				.setTimestamp()
				
				let modAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Mod`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Mod\`!`)
				.setColor('#aa00aa')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(modEmbed)
				message.channel.send(modEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(modAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835226609693753374')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652702569857064"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653975486464090"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let srModEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `SrMod`')
				.setColor('#aa0000')
				.setTimestamp()
				
				let srModAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `SrMod`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`SrMod\`!`)
				.setColor('#aa0000')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(srModEmbed)
				message.channel.send(srModEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(srModAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835226338000502785')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652663156375602"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653944724783135"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let jrAdminEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `JrAdmin`')
				.setColor('#55ffff')
				.setTimestamp()
				
				let jrAdminAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `JrAdmin`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`JrAdmin\`!`)
				.setColor('#55ffff')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(jrAdminEmbed)
				message.channel.send(jrAdminEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(jrAdminAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835225903688187995')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652634396033064"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653944724783135"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let adminEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as an `Admin`')
				.setColor('#00aaaa')
				.setTimestamp()
				
				let adminAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Admin`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Admin\`!`)
				.setColor('#00aaaa')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(adminEmbed)
				message.channel.send(adminEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(adminAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835225805914505267')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652609598652418"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653944724783135"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let adminEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `SrAdmin`')
				.setColor('#5555ff')
				.setTimestamp()
				
				let adminAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `SrAdmin`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`SrAdmin\`!`)
				.setColor('#5555ff')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(srAdminEmbed)
				message.channel.send(srAdminEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(srAdminAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835227431950352424')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652580364615741"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836654018469167195"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let devEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `Developer`')
				.setColor('#ffaa00')
				.setTimestamp()
				
				let devAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Developer`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Developer\`!`)
				.setColor('#ffaa00')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(devEmbed)
				message.channel.send(devEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(devAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835225711265972327')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652400864526376"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653639954858034"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let managerEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as a `Manager`')
				.setColor('#ff55ff')
				.setTimestamp()
				
				let managerAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Manager`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Manager\`!`)
				.setColor('#ff55ff')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(managerEmbed)
				message.channel.send(managerEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(managerAddEmbed)
			} else if (member.roles.cache.some(role => role.id === '835225479166164993')) {
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652359609221120"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836652911085748284"));
				staffMember.roles.add(staffMember.guild.roles.cache.find(role => role.id === "836653639954858034"));
				staffMember.roles.remove(staffMember.guild.roles.cache.find(role => role.id === "836655631481569291"));
				let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
				
				let ownerEmbed = new MessageEmbed()
				.setTitle('Authentication Successful!')
				.setDescription('You have been verified in the **AquaCraft | Staff** Guild as an `Owner`')
				.setColor('#ff5555')
				.setTimestamp()
				
				let ownerAddEmbed = new MessageEmbed()
				.setTitle('Authentication Successful for New `Owner`')
				.setDescription(`Authentication Info:\n\n» **User:** ${message.author}\n» **User ID:** ${message.author.id}\n» **Action:** Roles Added\n» **Reason:** Authentication successful for weighted permission group \`Owner\`!`)
				.setColor('#ff5555')
				.setTimestamp()
				.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
				
				staffMember.send(ownerEmbed)
				message.channel.send(ownerEmbed)
					.then(msg => {
						msg.delete({ timeout: 10000, reason: "Auto-Deletion"})
					}).catch(err => {
						console.log(err);
					})
				logChannel.send(ownerAddEmbed)
			} else {
				let noRolesEmbed = new MessageEmbed()
				.setTitle(':x: Error!')
				.setDescription('You only have the `Staff` role in the main Discord, so I can\'t tell what **staff group** you belong to!\nPlease ask a manager to fix your roles!')
				.setColor(EMBED_COLOR)
				.setTimestamp()
			}
		} else if (!member.roles.cache.some(role => role.id === '835277476988715038')) {
			message.reply(nopeEmbed)
				.then(msg => {
					msg.delete({ timeout: 10000, reason: "Auto-Delete" })
				})
			staffMember.send(nopeEmbed)
			logChannel.send(outsiderEmbed)
			staffMember.kick()
				.catch(logChannel.send(`${message.author} triggered flag \`POSSIBLE_INVALID_KICK (Type A)\`\nPlease ensure they have been removed from the Discord properly.`))
		} else {
			message.reply('error')
		}
    }
}