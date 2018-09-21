const Discord = require('discord.js');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
const settings = client.settings.get(message.guild.id);
let dev = message.content.slice(7).slice(settings.prefix.length).trim();
let rand = shortid.generate();

  client.channels.get('423889149750411282').send(`Report from: **${message.author.username}#${message.author.discriminator}**\nSupport ticket ID: **${rand}**\nServer: ${message.guild.name}\n\nReport:\n\`\`\`${dev}\`\`\`\n${new Date()}`);
  message.author.send(`Your support ID is **${rand}**, please contact Paws#0001 for help.`)
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "report",
  category: "Utility",
  description: "Reports a bug to our support branch",
  usage: "report [Issue]"
};
