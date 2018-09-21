
const Discord = require("discord.js")
const pokemonGif = require('pokemon-gif');

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars

  let image = args.slice(0).join(" ")
  if (!args[0]) { return message.channel.send(":x: Specify a Pokémon!") }
  message.channel.send("", { embed: new Discord.RichEmbed().setTitle("Pokémon Gif").setColor("#9B59B6").setImage(pokemonGif(image)).setFooter("Image by Pokestadium") })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "pokegif",
  category: "Miscelaneous",
  description: "Returns a gif of a pokemon from generation 6 (XY) or before",
  usage: "pokegif [pokemon name]"
};
