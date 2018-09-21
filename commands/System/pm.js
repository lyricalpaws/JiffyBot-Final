exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  const settings = client.settings.get(message.guild.id);
  let dev = args.slice(1)
  if (args[0] === undefined) return message.reply("add an ID to dm someone!");

  client.users.get(args[0]).send(`${dev}`).catch(console.error);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Support"
};

exports.help = {
  name: "pm",
  category: "System",
  description: "Pms a user",
  usage: "pm [target user ID] [message]"
};
