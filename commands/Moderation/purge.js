const Discord = require('discord.js');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars

  const messagecount = parseInt(args.join(' '));
  const settings = client.settings.get(message.guild.id);
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);

  client.channels.get(modlog.id).send(`**Action:** Purge\n**Moderator:** ${message.author.tag}\n**Messages Deleted:** ${messagecount}\n**Channel:** ${message.channel}`);

  message.delete();
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'purge',
  category: "Moderation",
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge <number>'
};
