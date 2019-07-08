/*jshint esversion: 8*/
module.exports.config = {
  name: "alt"
};

module.exports.run = (client, message, args) => {
  let roleid = "589317730268610560";
  let membersWithRole = client.guilds
    .get(`589290839855988766`)
    .roles.get(roleid).members;
  let size = membersWithRole.size;
  client.channels.get("589417718378266644").setName(`Clients: ${size}`);
  let role1 = message.guild.roles.find(r => r.name === "Free Client");
  let member = message.author.username;
  const reason = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!message.guild.roles.exists("name", "Alt Team"))
    return message.channel.send(
      `This server doesn't have a \`Alt Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
    );
  if (message.guild.channels.exists("name", "alt-" + message.author.id))
    return message.channel.send(`You already have a ticket open.`);
  let planRole = message.guild.roles.find(r => r.name === "Premium Plan");

  if (message.member.roles.has(planRole.id)) {
    message.guild
      .createChannel(`premium-${message.author.id}`, {
        type: "text",
        parent: "590681515885592606"
      })
      .then(c => {
        message.member.addRole("589317730268610560");
        message.member.addRole("589388364004851713");
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
          `:white_check_mark: Your Alt Ticket has been created, **${
            message.author.username
          }!**`
        );
        const embedYes = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Thanks for purchasing Premium Subscription!\nWe're procesing your alt and will be right with you!`
          )
          .setFooter(`User Type: Premium Client`)
          .setTimestamp();
        c.send({
          embed: embedYes
        });
      });
  } else {
    message.guild
      .createChannel(`alt-${message.author.id}`, {
        type: "text",
        parent: "589666636571607040"
      })
      .then(c => {
        message.member.addRole("589317730268610560");
        message.member.addRole("589388364004851713");
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

        const sel = new Discord.RichEmbed()
          .setTitle(`Select Alt Type`)
          .setDescription(
            `Please tell us the type of alt you would like to purchase.\n**Alts:** Minecraft, Spotify, Netflix, Fortnite, Hulu, Crunhyroll, WWE`
          );

        message.channel.send(
          `:white_check_mark: Your Alt Ticket has been created, **${
            message.author.username
          }!**`
        );

        const embedNo = new Discord.RichEmbed()
          .setColor("#d5835e")
          .addField(
            `Hey ${message.author.username}!`,
            `Our team will get to your Ticket asap! Check the support voice channel for response times!\nIf you would like to skip the queue you can purchase a **Premium Account!** \n**!upgrade**`
          )
          .setFooter(`User Type: Free Client`)
          .setTimestamp();
        c.send({
          embed: embedNo
        }).then(c.send(sel));
      });
  }
};
