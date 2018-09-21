const Discord = require("discord.js");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);
  let modlog = message.guild.channels.find('name', `${settings.announcementChannel}`);
  if(!modlog) return message.channel.send(`\`${settings.announcementChannel}\` doesn't exist!`).catch(console.error);
  let dev = message.content.slice(settings.prefix.length + 8).trim();

    message.delete();
    client.channels.get(modlog.id).send(`An announcement from ${message.author.username}#${message.author.discriminator}! (This might be important!)\n\n${dev}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "announce",
  category: "Moderation",
  description: "Annouces the given text.",
  usage: "announce [Announcement]"
};
