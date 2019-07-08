/*jshint esversion: 8*/
const Discord = require("discord.js");

module.exports.config = {
  name: "help"
};

module.exports.run = (client, message, args) => {
  // Create Embed
  const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: MinecraftAlts Help`)
    .setColor(0xcf40fa)
    .setDescription(
      `Hello! I'm Minecraft Alts, the Discord bot for super cool MinecraftAlts Discord Server!! Here are my commands:`
    )
    .addField(
      `Tickets`,
      `[${prefix}alt]() > Opens up a new ticket and tags the Alt Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`
    )
    .addField(
      `Other`,
      `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about MCA`
    );

  // Send Embed
  message.channel.send({
    embed: embed
  });
};
