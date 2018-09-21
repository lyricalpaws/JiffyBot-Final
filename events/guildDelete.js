
module.exports = (client, guild) => {
  client.settings.delete(guild.id);
  client.user.setPresence( { game: {name: ` ${client.guilds.size} servers || //prefix for server prefix`, type: 3}});
};
