const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const botconfig = require("../config/config.json");
const { registerCommands, registerEvents } = require('../src/utils/registry.js');
const packageJson = require('../package.json');
const got = require("got");
const keepAlive = require("./webserver.js");
require('dotenv').config();

const client = new discord.Client();

client.once("ready", () => {
	console.log(`\x1b[34m\x1b[1m[Aqua]\x1b[31m AquaBot v${packageJson.version}\x1b[36m has connected to \x1b[35m\x1b[1mDiscord \x1b[36msuccessfully!\x1b[0m`)
    client.user.setActivity('-help', { type: 'LISTENING' }) //PLAYING, STREAMING, LISTENING, WATCHING
        .then(presence => console.log(`\n\x1b[33m[INTERNAL-THREAD8]\x1b[0m \x1b[34m\x1b[1m[INFO] \x1b[36mActivity set to:\x1b[31m Listening to ${presence.activities[0].name} \x1b[36mby [[DROID-API]]`))
        .catch(console.error);
});

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        message.delete({ timeout: 5, reason: "Auto Delete"})

        let infoEmbed = new MessageEmbed()
        .setTitle(':ocean: Bot info')
        .setDescription('Hey! My name is **Aqua**.\nI am AquaCraft\'s Custom Bot, created by `Jackk#3018`.\n\nMy prefix here is `-`\nNeed help? Use `-help` for a list of commands!')
        .setColor(botconfig.EMBED_COLOR)
        .setTimestamp()
        .setFooter(`${client.user.username} by Jackk#3018`, `${client.user.displayAvatarURL()}`)

        message.channel.send(infoEmbed)
          .then(msg => {
            msg.delete({ timeout: 10000 })
          })
          .catch(console.error);
    };

  });
  
client.on("guildMemberAdd", (member, message) => {
	
	if (member.guild.id == "836652146602410004") {
		member.roles.add(member.guild.roles.cache.find(role => role.id === "836655631481569291"));
		let logChannel = client.guilds.cache.get("836652146602410004").channels.cache.get("838593485921189919");
		let staffNewMember = new MessageEmbed()
		.setTitle('Logs | New Member')
		.setDescription(`A new member has joined **AquaCraft | Staff**!\n\n» **User:** ${member}\n» **User ID:** ${member.id}`)
		.setColor(botconfig.EMBED_COLOR)
		.setTimestamp()
		logChannel.send(staffNewMember)
	} else if (member.guild.id == "835225349377228910") {
		console.log("New member in AC Main disc");
	} else return false;
});

(async () => {
    keepAlive();
    await client.login();
    client.commands = new discord.Collection();
    await registerEvents(client, '../eventHandlers');
    await registerCommands(client, '../commands');
})();