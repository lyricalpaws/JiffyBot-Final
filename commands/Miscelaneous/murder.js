

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return; else{
  message.channel.send(`:knife: I have successfully killed **${user.username}**. :knife:`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kill"],
  permLevel: "User"
};

exports.help = {
  name: "murder",
  category: "Miscelaneous",
  description: "Kills the user",
  usage: "murder [user]"
};
