/*jshint esversion: 8*/
module.exports.config = {
  name: "add"
};

module.exports.run = (client, message, args) => {
  if(message.author.id !== "532677204220444682") return;
  // Emit guildMemberRemove event
  client.emit("guildMemberRemove", message.member);
};
