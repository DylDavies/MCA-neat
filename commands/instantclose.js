/*jshint esversion: 8*/
module.exports.config = {
  name: "instantclose"
};

module.exports.run = (client, message, args) => {
  if (!message.channel.name.startsWith(`alt-`)) {
    if (!message.channel.name.startsWith(`premium-`)) return message.channel.send(`You can't use the instantclose command outside of a ticket channel.`);
  }
  let roleid = "589317730268610560";
  let membersWithRole = client.guilds
    .get(`589290839855988766`)
    .roles.get(roleid).members;
  let size = membersWithRole.size;
  message.channel.fetchMessages({}).then(msgCollection => {
    msgCollection.forEach(msg => {
      fs.appendFile(
        `/var/www/mca/ticket/${message.author.id}.txt`,
        `Time: ${message.createdAt}, ${msg.member.user.tag}: ${msg}, \n`,
        function(err) {
          // If an error occurred, show it and return
          if (err) return console.error(err);
          // Successfully wrote to the file!
        }
      );
    });
  });
  client.channels.get("589417718378266644").setName(`Clients: ${size}`);
  message.channel.delete();
};
