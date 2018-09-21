exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let dev = message.content.slice(3).slice(settings.prefix.length).trim();
  message.channel.send(dev);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "The bot will say a given message.",
  usage: "say [message]"
};
