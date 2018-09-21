
exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  let rand = Math.floor(Math.random()*16777215).toString(16);

  message.channel.send("<http://www.color-hex.com/color/" + rand + ">");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "randhex",
  category: "Miscelaneous",
  description: "Gives a random hex colour.",
  usage: "randhex"
};
