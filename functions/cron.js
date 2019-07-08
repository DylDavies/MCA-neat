/*jshint esversion: 8*/

module.exports = (cron, client) => {
  cron.schedule("* * * * *", () => {
    let roleid = "589317730268610560";
    let membersWithRole = client.guilds
      .get(`589290839855988766`)
      .roles.get(roleid).members;
    let size = membersWithRole.size;
    client.channels.get("589417718378266644").setName(`Clients: ${size}`);
    client.channels
      .get("596012446586765312")
      .setName(`Users: ${client.users.size}`);
  });
};
