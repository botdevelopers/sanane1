const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  //client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  client.user.setActivity(`Discord Bot List [TR]`, {type: "WATCHING"});
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Kullanıcı ismi ayarlandı!`);
};
