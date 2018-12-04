const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var botid = args.slice(0).join(' ');
	var guildID = "518322924080463872";
	var channelID = "519207531785224222";
	
	if (!botid){
		return message.reply("Bir ID Belirt! Doğru kullanım: **tr!ekle <Bot_ID>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Bot Ekleme İşlemi")
			.addField("Bot Sahibi:", message.author.tag)
			.addField("Bot Sahibi ID", message.author.id)
			.addField("Bot ID", botid)
			.addField("Botun Davet Linki", 'https://discordapp.com/oauth2/authorize?client_id=' + botid + '&scope=bot&permissions=8')
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Botunuz Kuyruğa Alınmıştır.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bot-ekle"], 
  permLevel: 0 
};

exports.help = {
  name: 'ekle', 
  description: "Botunuzu Sisteme Eklemenize Yarar.", 
  usage: 'ekle <Bot_ID>' 
};
