const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Türk Bot Sunucunuza Eklendi!**',
  '**Türk Bot** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Osman Tunahan Arıkan tarafından geliştirilmektedir!',
  'Botumuzun özelliklerini öğrenmek için tr!yardım komutunu kullanabilirsin.',
  '',
  `**Türk Bot Discord Sunucusu** https://discord.gg/tzyauT5`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})