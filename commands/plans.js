/*jshint esversion: 8*/
module.exports.config = {
  name: "plans"
};

module.exports.run = (client, message, args) => {
  const free = new Discord.RichEmbed()
    .setTitle(`Free Plan`)
    .setColor(`#33B5E6`)
    .setDescription(`$0.00/monthly`)
    .addField(`1 ALT`, `You can generate 1 alt!`, true)
    .addField(
      `24/7 SUPPORT`,
      `We're online 24/7 responding to your questions!`,
      true
    );

  const standard = new Discord.RichEmbed()
    .setTitle(`Standard Plan`)
    .setColor(`#2ABBAC`)
    .setDescription(`$2.00/monthly`)
    .addField(
      `150 ACCOUNTS /DAY`,
      `You can genearate up to 150 Accounts per day!`,
      true
    )
    .addField(
      `90% SERVER UNBANNED`,
      `The alts are 90% unbanned from most servers.`,
      true
    )
    .addField(
      `FREE LIFETIME UPDATES`,
      `You get all updates to alts & new ones!`,
      true
    )
    .addField(
      `99% UPTIME GUARANTEE`,
      `Our bots will almost never go down!`,
      true
    )
    .addField(
      `24/7 SUPPORT`,
      `We're online 24/7 responding to your questions!`,
      true
    );

  const premium = new Discord.RichEmbed()
    .setTitle(`Premium Plan`)
    .setColor(`#7264C3`)
    .setDescription(`$8.60/monthly`)
    .addField(
      `300 ACCOUNTS /DAY`,
      `You can genearate up to 300 Accounts per day!`,
      true
    )
    .addField(
      `90% SERVER UNBANNED`,
      `The alts are 90% unbanned from most servers.`,
      true
    )
    .addField(
      `FREE LIFETIME UPDATES`,
      `You get all updates to alts & new ones!`,
      true
    )
    .addField(
      `99% UPTIME GUARANTEE`,
      `Our bots will almost never go down!`,
      true
    )
    .addField(
      `24/7 SUPPORT`,
      `We're online 24/7 responding to your questions!`,
      true
    )
    .addField(
      `FULL ACCESS MINECRAFT GENERATOR`,
      `You can change the email, password & skin to your alt`,
      true
    )
    .addField(
      `OTHER GENERATORS`,
      `Access to spotify, Netflix, Stan & more generators!`,
      true
    )
    .addField(
      `ACCESS TO HACKED CLIENTS`,
      `Free hacked clients for you!`,
      true
    );

  const lifetime = new Discord.RichEmbed()
    .setTitle(`Lifetime Plan`)
    .setColor(`#FB6D9D`)
    .setDescription(`$34.72/lifetime`)
    .addField(
      `1,000 ACCOUNTS /DAY`,
      `You can genearate up to 1,000 Accounts per day!`,
      true
    )
    .addField(
      `90% SERVER UNBANNED`,
      `The alts are 90% unbanned from most servers.`,
      true
    )
    .addField(
      `FREE LIFETIME UPDATES`,
      `You get all updates to alts & new ones!`,
      true
    )
    .addField(
      `99% UPTIME GUARANTEE`,
      `Our bots will almost never go down!`,
      true
    )
    .addField(
      `24/7 SUPPORT`,
      `We're online 24/7 responding to your questions!`,
      true
    )
    .addField(
      `FULL ACCESS MINECRAFT GENERATOR`,
      `You can change the email, password & skin to your alt`,
      true
    )
    .addField(
      `OTHER GENERATORS`,
      `Access to spotify, Netflix, Stan & more generators!`,
      true
    )
    .addField(
      `ACCESS TO HACKED CLIENTS`,
      `Free hacked clients for you!`,
      true
    );

  message.channel.send(free);
  message.channel.send(standard);
  message.channel.send(premium);
  message.channel.send(lifetime);
};
