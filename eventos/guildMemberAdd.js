const Discord = require('discord.js')

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('banco.json')
const db = low(adpter)

module.exports = (client, msg) => {

    let channel = client.channels.get('682697076114849899');
    
    let embedWelcome = new Discord.RichEmbed()
        .setDescription(`🛎️ ${msg.member.user} | <#682986739047858373>`)
        channel.send(embedWelcome);
   }