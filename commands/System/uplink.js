exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let dev = message.content.slice(6).slice(settings.prefix.length).trim();
  module.exports = {
    uplink: `${dev}`,
    output: `${message.channel.id}`
  }

  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "uplink",
  category: "System",
  description: "Links the specified channel ID to a predetermined channel ID.",
  usage: "uplink [channel ID]"
};
