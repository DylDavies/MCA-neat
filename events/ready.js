/*jshint esversion: 8*/
const log = require("../functions/log.js");

let activites = [
  {
    name: `minecraft-alts.pro`,
    type: "WATCHING"
  },
  {
    name: `to get an alt type !alt`,
    type: "PLAYING"
  },
  {
    name: `!alt`,
    type: "LISTENING"
  },
  {
    name: `over our users.`,
    type: "WATCHING"
  }
];

module.exports = (client) => {
  // Set Booting Channels
  client.channels.get("589417718378266644").setName(`Bot starting up.`);
  client.channels.get("596012446586765312").setName(`Bot starting up.`);

  // Log to Logging Channel
  log(`MCA | Logged in! User count: ${client.users.size}`);

  // Set Client Presence
  client.user.client.user.setPresence({
    game: {
      name: "bot starting...",
      type: "LISTENING"
    },
    status: "DND"
  });

  // Change Activity
  let i = 0;
  setInterval(() => {
    client.user.setActivity(activites[i].name, {
      type: activites[i].type
    });
    i++;
    if (i === activites.length) i = 0;
  }, 55000);

  // Set Client Channels
  let roleid = "589317730268610560";
  let membersWithRole = client.guilds
    .get(`589290839855988766`)
    .roles.get(roleid).members;
  let size = membersWithRole.size;

  client.channels.get("589417718378266644").setName(`Clients: ${size}`);
};
