/*jshint esversion: 8*/
module.exports.config = {
  name: "close"
};

module.exports.run = (client, message, args) => {
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
  message.delete();
  if (!message.channel.name.startsWith(`alt-`)) {
    if (!message.channel.name.startsWith(`premium-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
  }
  message.member.removeRole("589388364004851713");
  message.channel.send(
    `:warning: @everyone :warning: This channel is deleting! Save your account login in risk of losing it!\n- Make sure to leave a review in <#589317231230320641>!\n- And tell your friends about us to claim your free alt!`
  );
  message.channel
    .send(`To cancel, type \`!cancel\`. This channel will delete in 1-minute`)
    .then(m => {
      message.channel
        .awaitMessages(response => response.content === "!cancel", {
          max: 1,
          time: 100000,
          errors: ["time"]
        })
        .then(collected => {
          m.edit("Canceled!");
        })
        .catch(() => {
          message.channel.delete();
        });
    });
};
