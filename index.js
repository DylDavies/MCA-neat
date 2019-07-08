/*jshint esversion: 8*/

// Package declaration
const Discord = require("discord.js");
var cron = require("node-cron");
var fs = require("fs");

// Discord Init
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("config.json");
let prefix = config.prefix;
let token = config.token;

// Function Init
let clean = require("/functions/clean.js");

// Command Handler
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // Only get .js files
    if (!file.endsWith(".js")) return;

    // Require command
    let props = require(`./commands/${file}`);

    // Get command name
    let commandName = props.config.name;

    console.log(`Attempting to load command: "${commandName}"...`);

    // Load command
    bot.commands.set(commandName, props);

    console.log(`Command "${commandName}" loaded.`);
  });
});

// Cron setup
require("/functions/cron.js")(cron, client);

// When bot is ready run the ready function
bot.on("ready", () => {
  require("/functions/ready.js")(client);
});

// Ran when a member joins the guild
client.on("guildMemberAdd", member => {
  require("/functions/guildMemberAdd.js")(member);
});

// Ran when the bot joins a guild
client.on("guildCreate", guild => {
  client.user.setGame(`do !alt for alts!`);
  guild.owner.user.send(`Hello! I'm MCA!`);
});

// Message event handler
client.on("message", message => {
  // Ignore all bots
  if (message.author.bot) return;
  // Ignore dms
  if (message.channel.type == "dm") return;
  // Auto reactions in reviews channel
  if(message.channel.id == "589317231230320641") return message.react("✅");
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.toLowerCase().indexOf(prefix) !== 0) return;
  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Grab the command data from the bot.commands collection
  const cmd = bot.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run CMD if it exists
  cmd.run(client, message ,args);
});

// Log the client in
client.login(token);
