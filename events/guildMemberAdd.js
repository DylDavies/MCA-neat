/*jshint esversion: 8*/
const log = require("../functions/log.js");

module.exports = (member) => {
  // Get guild member count
  let count = member.guild.memberCount.toString();

  // Get sufix
  let end = count[count.length - 1];
  let suffixed =
    end == 1 ? count + "st"
    : end == 2 ? count + "nd"
    : end == 3 ? count + "rd"
    : count + "th";

  // Get welcome channel
  const channel = member.guild.channels.find(chnl => chnl.name === "chat");
  if (!channel) {
    log("**Error**: Welcome Channel not found. Please create the channel with the name of ```chat```");
    return;
  }
  // Get user avatar url
  const memberavatar = member.user.displayAvatarURL;

  // Create Welcome Text
  let welcometxt = `:inbox_tray: Welcome **${member.user}**!`;

  // Create welcome string for embed
  let str = `Welcome to ${member.guild}!, **${
    member.user.username
  }**! \nYou are the **${suffixed}** member!
      \nCheck out our website [here](https://minecraft-alts.pro).\nTo get an alt type !alt.`;

  // Create welcome embed
  const welcome_embed = new Discord.RichEmbed()
    .setAuthor(member.user.tag, memberavatar)
    .setColor("363A3F")
    .setDescription(str)
    .setThumbnail(memberavatar)
    .setFooter(`${member.user.username}`)
    .setTimestamp();

  // Send welcome embed
  channel.send(welcome_embed).then(channel.send(welcometxt));
};
