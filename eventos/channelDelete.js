const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('../banco.json')
const db = low(adpter)

module.exports = async (channel) => {

    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
    let entry = logs.entries.first();
    
    db.get('channeldelete').push({
        id_author: entry.executor.id,
        name_author: entry.executor.username + '#' + entry.executor.discriminator,
        bot: entry.executor.bot,
        name_channel: channel.name,
        topico_channel: channel.topic,
        time: new Date()
        
    }).write()
}