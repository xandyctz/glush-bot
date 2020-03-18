const Discord = require('discord.js')

exports.run = (client, msg, args) => { 
    let helpEmbed = new Discord.RichEmbed()
    .setAuthor(`${msg.client.user.username} | Painel de ajuda`, client.user.avatarURL)
    .setTitle('TESTE')
    .setDescription(args[0])
    .addField('.teste', 'Testa determinado comando', inline=true)
    .addField('##.fuck', 'Manda fuck para todos', inline=true)
    .addField('.chao', 'Verifica o chao')

    //.setTimestamp(new Date())
    
    msg.channel.send(helpEmbed)
   
}