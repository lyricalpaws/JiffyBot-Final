const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let dev = message.content.slice(9).slice(settings.prefix.length).trim();

  client.channels.get(dev).createInvite()
  .then(invite => message.reply(`I created \`discord.gg/${invite.code}\``))
  .catch(console.error);
  message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "joinguild",
  category: "System",
  description: "Fetches an invite to a guild",
  usage: "joinguild [channel name]"
};
