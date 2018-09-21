exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let dev = message.content.slice(7).slice(settings.prefix.length).trim().toLowerCase();
  message.channel.send("*" + dev + "*");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "whisper",
  category: "Miscelaneous",
  description: "Shh",
  usage: "whisper [message]"
};
