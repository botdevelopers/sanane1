/**module.exports = member => {
  const Discord = require('discord.js');
  const channel = member.guild.channels.find('name', 'hoşgeldiniz');
  let memberavatar = member.user.avatarURL;
  let guild = member.guild
  if (!channel) return;
const embed = new Discord.RichEmbed()
  .setAuthor(member.user.username, memberavatar)
  .setColor("RANDOM")
  .setThumbnail(memberavatar)
  .setDescription(':inbox_tray: ***' + guild.name + '*** | Sunucuya Katıldı | Hoşgeldin Bro!')
  
const embed2 = new Discord.RichEmbed()
		.setAuthor(member.user.username, memberavatar)
		.setColor("RANDOM")
		.setThumbnail(memberavatar)
		.setDescription(':inbox_tray: ***' + guild.name + '*** | Yapımcım Sunucunuza katıldı. | Hoş Geldin Reis!')
// 355742603691687937
  if (member.id === "355742603691687937"){
	channel.sendEmbed(embed2);
	}else{
		
		  channel.sendEmbed(embed);
		
  }
  /** Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:inbox_tray: Sunucuya Katıldı: **${member}** :inbox_tray:`); **/
//}; 
