/*jshint esversion: 8*/
module.exports.config = {
  name: "ping"
};

module.exports.run = (client, message, args) => {
  message.channel.send(`Hoold on!`).then(m => {
    m.edit(
      `:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` +
        (m.createdTimestamp - message.createdTimestamp) +
        `ms, Discord API heartbeat is ` +
        Math.round(client.ping) +
        `ms.`
    );
  });
};
