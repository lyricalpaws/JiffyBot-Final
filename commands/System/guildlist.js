const Discord = require("discord.js")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let guildNames = client.guilds.map(g => g.name).join("\n")

  message.channel.send(`\`\`\`${guildNames}\`\`\``);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "guildlist",
  category: "System",
  description: "Lists guilds the bot is in",
  usage: "guildlist"
};
