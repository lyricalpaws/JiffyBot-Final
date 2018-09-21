const Discord = require("discord.js")

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  const msg = await message.channel.send("ping");
  msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}\`ms`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "Marco! Polo!",
  usage: "ping"
};
