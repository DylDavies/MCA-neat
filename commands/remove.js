/*jshint esversion: 8*/
module.exports.config = {
  name: "remove"
};

module.exports.run = (client, message, args) => {
  if(message.author.id !== "532677204220444682") return;
  // Emit guildMemberAdd event
  client.emit("guildMemberAdd", message.member);
};
