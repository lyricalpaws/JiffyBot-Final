
const Discord = require("discord.js")
const translate = require('google-translate-api');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  let translateme = args.slice(0).join(" ")
  translate(translateme, { to: client.config.translate }).then(res => {
   message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Translate").setColor("#9B59B6").setDescription("From - ** " + res.from.language.iso + "**\nTo - ** " + client.config.translate + "**\nInput - **" + translateme + "**\nOutput :arrow_down:```" + res.text + "```").setFooter("Powered by Google") })
  }).catch(err => {
      message.channel.send(":x: An error has occurred. Details: " + err)
  });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "translate",
  category: "Utility",
  description: "Translates given text to English",
  usage: "translate [Text]"
};
