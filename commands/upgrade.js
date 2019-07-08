/*jshint esversion: 8*/
module.exports.config = {
  name: "upgrade"
};

module.exports.run = (client, message, args) => {
  message.channel.send(
    `**Purchase** - Buy premium & full access alts: https://www.paypal.me/minecraftsalts\n*You can get the amount of plans with \`!plans\` or visit our Website https://minecraft-alts.pro*`
  );
};
