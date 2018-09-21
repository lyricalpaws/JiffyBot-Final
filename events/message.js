
module.exports = async(client, message) => {
  if (message.author.bot) return;

  const settings = message.guild
    ? client.settings.get(message.guild.id)
    : client.config.defaultSettings;

  message.settings = settings;

  var sourceFile = require('../commands/System/uplink.js');

  if (message.channel.type === 'dm'){
     return client.channels.get('423879867898134528').send(`Message from: ${message.author.username}#${message.author.discriminator} (${message.author.id}): \`\`\`\n\n${message.content}\`\`\``);
  }

  if (client.config.userblacklist.includes(message.author.id)) return;
  if (client.config.guildblacklist.includes(message.guild.id)) return;

  if (message.channel.id === `${sourceFile.output}`){
    if (sourceFile.uplink === undefined) return;
    client.channels.get(`${sourceFile.uplink}`).send(`${message.author.username}#${message.author.discriminator}: ${message.content}`).catch(console.error)
  }

  if (message.channel.id === `${sourceFile.uplink}`){
    if (sourceFile.output === undefined) return;
    client.channels.get(`${sourceFile.output}`).send(`${message.author.username}#${message.author.discriminator}: ${message.content}`).catch(console.error)
  }

  if (message.content.startsWith('//prefix')) message.reply(`My help command (and prefix) for this server is ${settings.prefix}help`)

  if (message.content.startsWith('@someone')){
    let emotes = ["୧((#Φ益Φ#))୨", "(＃`Д´)", "٩(╬ʘ益ʘ╬)۶", "!?! (Дﾟ≡ﾟДﾟ) ?!!", "(╯°□°）╯︵ ┻━┻", "(┛◉Д◉)┛彡┻━┻", "(ノಠ益ಠ)ノ彡┻━┻", "(┛✧Д✧))┛彡┻━┻"]
    let rand = Math.floor(Math.random() * emotes.length);
    let user = message.guild.members.random();
    message.channel.send(`${user.displayName} ${emotes[rand]}`)
  }

  if (!message.content.startsWith(settings.prefix)) return;

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const level = client.permlevel(message);

  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`You do not have permission to use this command.`);
    } else {
      return;
    }
  }


  message.author.permLevel = level;

  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  client.channels.get('433725738730913802').send(`[CMD] Usr: \`${message.author.username}#${message.author.discriminator}\` (${message.author.id}), Tag: \`${cmd.help.name}\`, Guild: \`${message.guild.name}\` (${message.guild.id}), Channel: \`${message.channel.name}\` (${message.channel.id})`);
  cmd.run(client, message, args, level);
};
