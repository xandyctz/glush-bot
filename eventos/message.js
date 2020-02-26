module.exports = (client, message) => {
    // Ignora todos bots
    if (message.author.bot) return;
  
    // Ignora messagem que nao tenha prefix do config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //tira uma mensagem de error no console
    if(args[0] == undefined) {
        return;
    }
  
    // Pega os dados do comando  no Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    // if (!cmd) return;
    if(!cmd) {
        return message.reply('esse comando nao existe.').then(message => {message.delete(10000)});
    }
  
    // Inicia o comando
    cmd.run(client, message, args);
  };