const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const ayar = require("../ayarlar.json")
process.setMaxListeners(0);/////Erasty
require("moment-duration-format");
///Erasty
exports.run = async (bot, message, args) => {
  
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  ////Erasty
  .setColor('BLACK')
  .setFooter(`${ayar.botisim}`, bot.user.avatarURL)////Erasty
  .addField(`» **Botun Sahibi**`, `<@${ayar.sahip}>`)
  .addField("» **Geliştirici** ",`<@${ayar.sahip}>`)/////Erasty
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)/////Erasty
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)/////Erasty
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)/////Erasty
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) //////Erasty
  .addField("**» Bot Davet**", ` [Davet Et](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot)`, )/////Erasty
  .addField("**» Destek Sunucusu**", ` [Sunucumuza Katıl](${ayar.desteksunucu})`, )
   
 return message.channel.send(istatistikler);/////Erasty
  };

exports.conf = {/////Erasty
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi","botbilgi","i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "bot bilgilerini vermektedir.",
  usage: "istatistik"
};/////Erasty