exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let dev = message.content.slice(4).slice(settings.prefix.length).trim().toUpperCase();
  message.channel.send(dev);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "yell",
  category: "Miscelaneous",
  description: "AAAAAAAAAAAAAAAAAAAAAA",
  usage: "yell [message]"
};
