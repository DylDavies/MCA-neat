/*jshint esversion: 8*/
module.exports.config = {
  name: "away"
};

module.exports.run = (client, message, args) => {
  client.channels.get("596180274056921119").setName(`Support: Away`);
  message.channel.send(`Updated status.`);
};
