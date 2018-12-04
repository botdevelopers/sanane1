const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let sebep = args.slice(1).join(' ');
	let Bot = message.mentions.users.first();
	var guildID = "518322924080463872";
	var channelID = "518334033990778880";
	message.delete()
	
	if (!Bot){
		return message.reply("**Doğru Kullanımı: -reddet <@bot> <Sebep>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem", "Bot Reddetme",true)
			.addField("Yetkili", message.author.tag,true)
			.addField("Yetkili ID", message.author.id,true)
			.addField("Bot", Bot,true)
			.addField("Sebep", sebep,true)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		
		if (!message.guild) {
		  const ozelmesajuyari = new Discord.RichEmbed()
		  .setColor(0xFF0000)
		  .setTimestamp()
		  .setAuthor(message.author.username, message.author.avatarURL)
		  .addField(':warning: Uyarı :warning:', '`reddet` adlı komutu özel mesajlarda kullanamazsın.')
		  return message.author.sendEmbed(ozelmesajuyari); }
		  let guild = message.guild
		  let user = message.mentions.users.first();
		  if (message.mentions.users.size < 1) return message.reply('Kimi Reddedeceğimi Yazmalısın!').catch(console.error);

		  if (!message.guild.member(user).kickable) return message.reply('Reddedeceğim Bot Benden Yüksek Bir Rolde!');
		  message.guild.member(user).kick();
		
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['red'], 
  permLevel: 2
};

exports.help = {
  name: 'reddet', 
  description: "Botu Reddetmenizi Sağlar.", 
  usage: 'reddet <@Bot' 
};
