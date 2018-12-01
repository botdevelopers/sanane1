const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var Bot = args.slice(0).join(' ');
	var Onay = "Bot";
	var guildID = "518322924080463872";
	var channelID = "518334033990778880";
	message.delete()
	if (!Bot){
		return message.reply("Doğru Kullanımı: tr!onayla <@bot>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem", "Bot Onaylama")
			.addField("Yetkili", message.author.tag)
			.addField("Yetkili ID", message.author.id)
			.addField("Bot", Bot)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		
		
	  if (message.mentions.users.size < 1) return message.channel.send('Hangi Botu Reddedeceğimi Yazmalısın!').catch(console.error);
	  let user = message.mentions.users.first();
	  let guild = message.guild
	  let muteRole = client.guilds.get(message.guild.id).roles.find('name', Onay);
	  if (!muteRole) return message.channel.send(`Bot Reddedilemedi!`).catch(console.error);
	  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed)
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed)
    });
  }
		
		
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['onay'], 
  permLevel: 2
};

exports.help = {
  name: 'onayla', 
  description: "Botu Onaylamanızı Sağlar.", 
  usage: 'onayla <@Bot' 
};