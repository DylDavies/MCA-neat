/*jshint esversion: 8*/
module.exports.config = {
  name: "s"
};

module.exports.run = (client, message, args) => {
  message.delete();
  message.channel.send(
    `Are you satisfied with your experience & happy to close this ticket?`
  );
};
