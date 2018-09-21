
exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.channel.send(`**:cookie: | ${message.author.username} gave the air a cookie.**`).catch(console.error);
   else{
     message.channel.send(`:cookie: | **${message.author.username}** just gave **${user.username}** a cookie!`)
   }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "cookie",
  category: "Miscelaneous",
  description: "Hands a cookie to a user",
  usage: "cookie [user]"
};
