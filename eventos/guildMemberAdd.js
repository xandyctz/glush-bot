const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('../banco.json')
const db = low(adpter)

module.exports = member => {
    // let channel = member.guilds.channels.get('671537129750528006');
    // let welcome = new Discord.RichEmbed()
    // .setAuthor(`${member.user.tag} | ${member.user.id}`, `${member.user.displayAvatarURL}`)
    // 
    // let channel = msg.guild.channels.get('671537129750528006');
    // if(msg.content === 'teste') {
        // if(msg.author.bot) return;
        // let welcome = new Discord.RichEmbed()
        // .setAuthor(`${msg.member.user.tag} | ${msg.member.user.id}`, `${msg.member.user.displayAvatarURL}`)
        // .setDescription('Quero lhe desejar as boas vindas ao revolucionario Glush Server. Aqui voce receberar todo suporte possivel sobre mim.')
        // .setThumbnail(`${msg.guild.displayAvatarURL}`)
        // .setFooter(`${msg.client.user.tag}`, `${msg.client.user.displayAvatarURL}`)
        // .setTimestamp()
        // channel.send(welcome);
//    }
    
}