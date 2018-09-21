exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return; else{
    let rand = Math.floor(Math.random() * 11)
    message.channel.send(`:thinking: I'd give ${user.username} a ${rand}/10`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "rate",
  category: "Miscelaneous",
  description: "Gives the mentioned user a rating out of 10",
  usage: "rate [user]"
};
