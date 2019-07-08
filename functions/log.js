/*jshint esversion: 8*/

module.exports = (client, text) => {
  let logChannel = client.channels.get("597810760114241541");
  let sent = false;

  setTimeout(() => {
    sent = true;
    logChannel.send(text);
  }, 55000);
};
