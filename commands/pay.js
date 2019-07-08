/*jshint esversion: 8*/
module.exports.config = {
  name: "pay"
};

module.exports.run = (client, message, args) => {
  message.channel.send(
    `**Pay** - Send all payments here: https://www.paypal.me/minecraftsalts\n*Make sure to send proof of payment afterwards here.*`
  );
};
