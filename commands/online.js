/*jshint esversion: 8*/
module.exports.config = {
  name: "online"
};

module.exports.run = (client, message, args) => {
  client.channels.get("596180274056921119").setName(`Support: Online`);
  message.channel.send(`Updated status.`);
};
