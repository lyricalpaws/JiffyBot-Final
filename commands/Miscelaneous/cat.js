const Discord = require("discord.js")
const superagent = require("superagent");
const catFacts = require('cat-facts');

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  superagent.get("http://aws.random.cat/meow", (err, res) => {
      if (err) { return message.channel.send(":x: An error has occurred. Details: " + err) }
      message.channel.send("", {
          embed: new Discord.RichEmbed().setTitle("Random Cat").setColor("#9B59B6").setDescription(catFacts.random()).setImage(res.body.file).setFooter("Image by random.cat")
      })
  })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "cat",
  category: "Miscelaneous",
  description: "Wholesome cats",
  usage: "cat"
};
