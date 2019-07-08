/*jshint esversion: 8*/
module.exports.config = {
  name: "support"
};

module.exports.run = (client, message, args) => {
  let member = message.author.username;
  const reason = args.join(" ");
  if (!message.guild.roles.exists("name", "Alt Team"))
    return message.channel.send(
      `This server doesn't have a \`Alt Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
    );
  if (message.guild.channels.exists("name", "support-" + message.author.id))
    return message.channel.send(`You already have a support ticket open.`);
  message.guild
    .createChannel(`support-${message.author.id}`, {
      type: "text",
      parent: "590830452902723595"
    })
    .then(c => {
      let role = message.guild.roles.find("name", "Alt Team");
      let role2 = message.guild.roles.find("name", "Support Team");
      let role3 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
      c.overwritePermissions(role3, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });

      message.channel.send(
        `:white_check_mark: Your Support ticket has been created, **${
          message.author.username
        }!**`
      );
      const embed = new Discord.RichEmbed()
        .setColor(0xcf40fa)
        .addField(
          `Hey ${message.author.username}!`,
          `How may we help you today?\nIf you have an existing alt ticket open please mention it here!`
        )
        .setFooter(`Support Ticket`)
        .setTimestamp();
      c.send({
        embed: embed
      });
    })
    .catch(console.error);
};
