const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let codare = "https://discord.gg/U9hYFfpD8V"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `w!kategori`\n**Örnek:** `w!genel`')
    .addField('Komutlar:', 
    `[w!genel](${codare})
    [w!eğlence](${codare})
    [w!kullanıcı](${codare})
    [w!ayarlar](${codare})
    [w!ekonomi](${codare})
    [w!eklenti](${codare})
    [w!otorol-sistem](${codare})`)
    .setImage('https://cdn.discordapp.com/attachments/1161706634935025844/1162104825916428439/9k.png?ex=653ab975&is=65284475&hm=7708315cac03b3ad194a061947ef020ac8e0b01767473449ee7a2fbbedc9a803&')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
} else {
message.channel.send('Böyle bir kategori yok')
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım"
}