const Discord = require('discord.js');

exports.run = async (client, message, args, level) => {
  let text = args.slice(1).join(" ");
  let member = message.mentions.members.first();
  let myRole = message.guild.roles.find("name", `${text}`);
  if (!member) return message.channel.send("Please mention a member to remove a role!");
  if (!myRole) return message.channel.send("Please say a role name to remove a member from it.");
  const settings = client.settings.get(message.guild.id);
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);

  member.removeRole(myRole).catch(console.error);
  message.channel.send(`<:Yes:363053009804197888> I successfully removed ${member} from the ${myRole.name} role!`)

  client.channels.get(modlog.id).send(`**Action:** Role Delete\n**Target:** ${member}\n**Moderator:** ${message.author.tag}\n**Role:** ${myRole.name}`);
  message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "derole",
  category: "Moderation",
  description: "Assigns a user a role.",
  usage: "derole [user] [role]"
};
