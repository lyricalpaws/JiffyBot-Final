const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  let text = args.slice(1).join(" ");
  let member = message.mentions.members.first();
  let myRole = message.guild.roles.find("name", `${text}`);
  if (!member) return message.channel.send("Please mention a member to assign a role!");
  if (!myRole) return message.channel.send("Please say a role name to assign a member to it.");
  const settings = client.settings.get(message.guild.id);
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);

  member.addRole(myRole).catch(console.error);

  message.delete();
  client.channels.get(modlog.id).send(`**Action:** Role Add\n**Target:** ${member}\n**Moderator:** ${message.author.tag}\n**Role:** ${myRole.name}`);
  client.channels.get(modlog.id).send(`<:Yes:363053009804197888> I successfully added ${member} to the ${myRole.name} role!`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "role",
  category: "Moderation",
  description: "Assigns a user a role.",
  usage: "role [user] [role]"
};
