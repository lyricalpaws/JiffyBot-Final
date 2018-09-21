const Discord = require('discord.js');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);

  message.delete();
  client.channels.get(modlog.id).send(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'warn',
  category: "Moderation",
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
