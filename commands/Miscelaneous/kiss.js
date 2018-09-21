exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.channel.send(`**:broken_heart: | ${message.author.username} gave the air a kiss.**`).catch(console.error);
   else{
     message.channel.send(`**:heart: | ${message.author.username} just gave ${user.username} a kiss! (How cute!)**`)
   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "kiss",
  category: "Miscelaneous",
  description: "Kisses a user",
  usage: "kiss [User]"
};
