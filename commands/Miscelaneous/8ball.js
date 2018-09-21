 const Discord = require('discord.js');

 exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

   let replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yep", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no","Very doubtful", "Outlook not so good"];

   let result = Math.floor((Math.random() * replies.length));
   let question = message.content.slice(7).trim();
   let ballembed = new Discord.RichEmbed()
   .setAuthor(message.author.tag)
   .setColor("7C31D9")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);
 message.channel.send(ballembed)
 message.delete();

 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: "User"
 };

 exports.help = {
   name: "8ball",
   category: "Miscelaneous",
   description: "Does what it says on the tin",
   usage: "8ball [Question]"
 };
