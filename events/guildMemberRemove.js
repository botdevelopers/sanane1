/**module.exports = member => {
  const Discord = require('discord.js');
  const channel = member.guild.channels.find('name', 'hoşgeldiniz');
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let guild = member.guild
const embed = new Discord.RichEmbed()
  .setAuthor(member.user.username, memberavatar)
  .setColor("RANDOM")
  .setThumbnail(memberavatar)
  .setDescription(':outbox_tray: ***' + guild.name + '*** | Sunucudan Ayrıldı | Güle Güle Bro!')
  channel.sendEmbed(embed);
}; **/
