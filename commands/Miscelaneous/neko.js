const Discord = require("discord.js")
const superagent = require("superagent");

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  message.delete();
  superagent.get("https://nekos.life/api/neko", (err, res) => {
      if (err) { return message.channel.send(":x: An error has occurred. Details: " + err) }
      message.channel.send("", { embed: new Discord.RichEmbed().setTitle(`Random Neko requested by ${message.author.username}`).setColor("7C31D9").setImage(res.body.neko).setFooter("Image by nekos.life") })
  })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "neko",
  category: "Miscelaneous",
  description: "We all need some catgirls",
  usage: "neko"
};
