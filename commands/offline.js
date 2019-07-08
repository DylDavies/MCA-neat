/*jshint esversion: 8*/
module.exports.config = {
  name: "offline"
};

module.exports.run = (client, message, args) => {
  client.channels.get("596180274056921119").setName(`Support: Offline`);
  message.channel.send(`Updated status.`);
};
