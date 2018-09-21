
module.exports = (client, guild) => {
  client.settings.set(guild.id, client.config.defaultSettings);
  client.user.setPresence( { game: {name: ` ${client.guilds.size} servers || //prefix for server prefix`, type: 3}});
  guild.owner.send(`**Thanks for inviting me to your server!**\n\nTo view a list of commands, do \`//help\`.\nIf you want to customise the bot a little bit, then do \`//set\` in your server.\nIf you have any issues, feel free to do \`//report\` for a quick response from our support team!`)
};
