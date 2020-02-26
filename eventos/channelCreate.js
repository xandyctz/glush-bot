const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('../banco.json')
const db = low(adpter)

module.exports = channel => {

    
    db.set('channelcreate', []).write()

    db.get('channelcreate').push({
        idl: channel.id,
        name: channel.name,
        time: new Date()

    }).write()
    


}