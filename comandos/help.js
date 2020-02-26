const Discord = require('discord.js')

exports.run = (client, msg) => { 
    let helpEmbed = new Discord.RichEmbed()
    .setAuthor(`${msg.client.user.username} | Painel de ajuda`, client.user.avatarURL)
    .setTitle('TESTE')
    .setTimestamp(new Date())
    msg.channel.send(helpEmbed)
}