module.exports = async client => {
  await client.wait(1000);

  client.log("log", `${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "Ready!");

  client.user.setPresence( { game: {name: ` ${client.guilds.size} servers || //prefix for server prefix`, type: 3}});

  client.guilds.filter(g => !client.settings.has(g.id)).forEach(g => client.settings.set(g.id, client.config.defaultSettings));
};
