exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  message.channel.send("Please use <https://discordapp.com/oauth2/authorize?client_id=297391906936193030&scope=bot&permissions=8> to invite me to your server!")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inv"],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Utility",
  description: "Bot invite",
  usage: "invite"
};
