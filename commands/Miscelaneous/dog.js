const Discord = require("discord.js")
const superagent = require("superagent");
const dogFacts = require('dog-facts');

exports.run = async (client, message) => { // eslint-disable-line no-unused-vars

  superagent.get("https://random.dog/woof.json", (err, res) => {
      if (err) { return message.channel.send(":x: An error has occurred. Details: " + err) }
      message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Random Dog").setColor("#9B59B6").setDescription(dogFacts.random()).setImage(res.body.url).setFooter("Image by random.dog") })
  })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "dog",
  category: "Miscelaneous",
  description: "Wholesome dogs",
  usage: "dog"
};
