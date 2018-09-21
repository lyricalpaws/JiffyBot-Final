const Discord = require('discord.js');

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars

  const settings = client.settings.get(message.guild.id);
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', `${settings.modLogChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.modLogChannel}\` doesn't exist!`).catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
  message.guild.ban(user, 7);

  client.channels.get(modlog.id).send(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'ban',
  category: "Moderation",
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
