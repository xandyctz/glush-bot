exports.run = (client, msg) => {
    if(channel.permissionsFor(msg.author).has('ADMINISTRATOR')) {
        msg.guild.channels.deleteAll();
    } else {
        msg.reply('sem permissão.');
    }
    

}