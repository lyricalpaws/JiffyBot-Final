const Discord = require("discord.js")

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars
  const settings = client.settings.get(message.guild.id);

  let rand = Math.floor(Math.random()*16777215).toString(16);
  let dev = message.content.slice(2).slice(settings.prefix.length).trim();
  let embed = new Discord.RichEmbed()
        .setColor(`${rand}`)
        .setDescription(`\***${message.author.username} ${dev}**`);

    message.channel.send(" ", embed);
    message.delete();

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "me",
  category: "Miscelaneous",
  description: "You do something, but in an embed",
  usage: "me [action]"
};
