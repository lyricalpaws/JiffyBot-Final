const Discord = require('discord.js');
exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  client.channels.get(modlog.id).send(`**Action:** Kick\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'kick',
  category: "Moderation",
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
