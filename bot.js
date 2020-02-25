const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('banco.json')
const db = low(adpter)

client.on('ready', () => {
    console.log(`${client.user.tag} | ONLINE`)
})

client.on('channelCreate', async (channel) => {
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
    let entry = logs.entries.first();
    //db.set('canal', []).write()

    db.get('channelcreate').push({
        idAuthor: entry.executor.id,
        nameAuthor: entry.executor.username + '#' + entry.executor.discriminator,
        bot: entry.executor.bot,
        idChannel: channel.id,
        nameChannel: channel.name,
        time: new Date()

    }).write()
    

})

client.on('channelDelete', async (channel) => {
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
    let entry = logs.entries.first();
    
    db.get('channeldelete').push({
        idAuthor: entry.executor.id,
        nameAuthor: entry.executor.username + '#' + entry.executor.discriminator,
        bot: entry.executor.bot,
        nameChannel: channel.name,
        topicoChannel: channel.topic,
        time: new Date()
        
    }).write()
})
/*
client.on('guildMemberAdd', member => {
    let channel = member.guilds.channels.get('671537129750528006');
    let welcome = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag} | ${member.user.id}`, `${member.user.displayAvatarURL}`)
    
        let channel = msg.guild.channels.get('671537129750528006');
    if(msg.content === 'teste') {
        if(msg.author.bot) return;
        let welcome = new Discord.RichEmbed()
        .setAuthor(`${msg.member.user.tag} | ${msg.member.user.id}`, `${msg.member.user.displayAvatarURL}`)
        .setDescription('Quero lhe desejar as boas vindas ao revolucionario Glush Server. Aqui voce receberar todo suporte possivel sobre mim.')
        .setThumbnail(`${msg.guild.displayAvatarURL}`)
        .setFooter(`${msg.client.user.tag}`, `${msg.client.user.displayAvatarURL}`)
        .setTimestamp()
        channel.send(welcome);
   }
    
})*/

client.on('message', msg => {

    if(msg.author.bot) return;
    if(msg.channel.type === 'dm') return;
    if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.slice(prefix.length).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();

    // comandos
    if (comando === 'teste') {
        msg.channel.send("teste")
        //criar
        db.set(msg.author.id, []).write()
        //postar
        db.get(msg.author.id).push({
            name: msg.author.username,
            message: msg.author.tag,
            nada: 'nadaa'
        }).write()
        
    } 



    else if (comando === 'channelname') {
        // pega o channel
        let channel = msg.channel;

        //cria uma array ex: [ 'teste1', 'teste2' ]
        const args = msg.content.slice(prefix.length).split(' ');

        //se nao for a array 1 return erro
        if(!args[1]) {
            return msg.channel.send('Exemplo: .a glush');
        } else {
        channel.setName(args[1]);
        
        }
    }


    else if (comando === 'channeldel') {
        const args = msg.content.slice(prefix.length).split(' ');

        let channelg = msg.guild.channels.find('name', args[1]);
        if(!args[1]) {
            return msg.channel.send('Exemplo: .channeldel (channel name)');
        } else {
            channelg.delete(args[1])
    }   
    }
});



client.login(token);