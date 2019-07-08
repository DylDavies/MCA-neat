/*jshint esversion: 8*/
module.exports.config = {
  name: "logs"
};

module.exports.run = (client, message, args) => {
  fs.readdir("/var/www/mca/logs", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "txt");
    if (jsfile.length <= 0) {
      console.log("couldn't find logs");
      return;
    }
    jsfile.forEach((f, i) => {
      let props = require(`/var/www/mca/logs/${f}`);
      message.channel.send(`${f} has been loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });
};
