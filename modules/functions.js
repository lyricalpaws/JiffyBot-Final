module.exports = (client) => {

  client.permlevel = message => {
    let permlvl = 0;

    const permOrder = client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };


  client.log = (type, msg, title) => {
    if (!title) title = "Log";
    console.log(`[${title}] ${msg}`);
  };


  client.awaitReply = async (msg, question, limit = 60000) => {
    const filter = m=>m.author.id = msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise")
      text = await text;
    if (typeof evaled !== "string")
      text = require("util").inspect(text, {depth: 0});

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

    return text;
  };

  client.loadCommand = (commandName) => {
    try {
      const props = require(`../${commandName}`);
      client.log("log", `Loading Command:  ${props.help.name}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    var commandIndex;
    if (client.commands.has(commandName)) {
      var i = 0;
      console.log(`commands has commandName`);
      console.log(client.aliases.keyArray());
      commandIndex = client.commands.keyArray().indexOf(commandName);
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      commandIndex = client.commands.Array().indexOf(commandName);
      for(var prop in client.commands){
        var i = 0;
        if(prop.aliases.get(commandName)){
          commandIndex = i;
        }
        else{
          i++;
        }
    }
  }
  console.log(commandIndex);
    if (!commandIndex) return `The command \`${commandName}\` doesn't seem to exist, nor is it an alias. Try again!`;

    if (command.shutdown) {
      await command.shutdown(client);
    }
    console.log(client.cmdFiles[commandIndex]);
    delete require.cache[require.resolve(`../${client.cmdFiles[commandIndex]}`)];
    return false, client.cmdFiles[commandIndex];
  };

  String.prototype.toProperCase = function() {
    return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  Array.prototype.random = function() {
    var Random = require("random-js")();
    return this[Random.integer(0, this.length)];
  };

  client.wait = require("util").promisify(setTimeout);

  client.isUser = (string) => {
    console.log(`isUser has run`)
    for(i = 0; i < client.guilds.array().length; i++){
      var server = client.guilds.array()[i];
       console.log(server.name)
      for(var e= 0; e < server.members.array().length; e++){
        var member = server.members.array()[e]
        console.log(member.user.username);
        console.log(member.displayName);
        console.log(string);
        if(string == member.user.username || string == member.displayName){
          return member.user;
        }
      }
    }
    return false;
  }

  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.error("Uncaught Exception: ", errorMsg);
    process.exit(1);
  });

  process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: ", err);
  });
};
