/*jshint esversion: 8*/
module.exports.config = {
  name: "test"
};

module.exports.run = (client, message, args) => {
  fs.appendFile(
    `/var/dbots/mca/plogs/premiumalt-${message.author.id}.txt`,
    `Hello \n`,
    function(err) {
      // If an error occurred, show it and return
      if (err) return console.error(err);
      // Successfully wrote to the file!
    }
  );
};
