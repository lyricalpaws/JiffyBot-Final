exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  let user = message.mentions.users.first();
    message.channel.send(`Info of: ${user.username}\n\nFull username: ${user.username}#${user.discriminator}\nUser ID: ${user.id}\nStatus: ${user.presence.status}\nPlaying: ${user.presence.game.name}\nIs a bot? ${user.bot}\nAccount Created At: ${user.createdAt}\n\nAvatar: ${user.avatarURL}`, {code: ""});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Utility",
  description: "Relays information from discord about the user.",
  usage: "info [user]"
};
