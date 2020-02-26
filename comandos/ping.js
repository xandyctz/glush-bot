exports.run = (client, message, args) => {
    args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    
    message.channel.send(args[1]).catch(console.error);
}