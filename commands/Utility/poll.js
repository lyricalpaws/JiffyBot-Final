exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  const settings = client.settings.get(message.guild.id);
  let dev = message.content.slice(4).slice(settings.prefix.length).trim();

  message.channel.send(`**${message.author.username}#${message.author.discriminator} started a poll!**\n\n${dev}`).then((message) => {
    message.react('👍');
    message.react('👎');
  });
  message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "poll",
  category: "Utility",
  description: "Creates a yes/no poll",
  usage: "Poll [Question]"
};
