
exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.channel.send(`**${message.author.username} just hugged no-one.**`).catch(console.error);
   else{
     message.channel.send(`**${message.author.username}** hugged **${user.username}**!`)
   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Miscelaneous",
  description: "Hugs the user",
  usage: "hug [user]"
};
