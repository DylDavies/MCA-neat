/*jshint esversion: 8*/
module.exports.config = {
  name: "jobs"
};

module.exports.run = (client, message, args) => {
  let member = message.author.username;
  const reason = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!message.guild.roles.exists("name", "Alt Team"))
    return message.channel.send(
      `This server doesn't have a \`Alt Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
    );
  if (
    message.guild.channels.exists("name", "application-" + message.author.id)
  )
    return message.channel.send(`You already have an application open.`);
  message.guild
    .createChannel(`application-${message.author.id}`, {
      type: "text",
      parent: "589667779570040872"
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
        `:white_check_mark: Your Application has been created, **${
          message.author.username
        }!**\nGood luck! :four_leaf_clover:`
      );
      const embed = new Discord.RichEmbed()
        .setColor(0xcf40fa)
        .addField(
          `Hey ${message.author.username}!`,
          `Thanks for showing your interest in applying for MCA.\n**Please fill out all questions below.**\n\n 1. How old are you?\n2. What's your name?\n 3. What are your skills?\n 4. What can you bring to the team? \n 5. What's your biggest weakness?\n 6. Have you had any experience being staff before?`
        )
        .setFooter(`User Type: Free`)
        .setTimestamp();
      c.send({
        embed: embed
      });
    })
    .catch(console.error);
};
