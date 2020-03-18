module.exports = (client, msg) => {
    // Ignora todos bots
    if (msg.author.bot) return;
  
    // Ignora msgm que nao tenha prefix do config.json)
    if (msg.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //se nao tiver nada dps do comando ele segui em frente
    if(args[0] == undefined) {
        
    }
  
    // Pega os dados do comando  no Enmap
    const cmd = client.commands.get(command);
  
    // if (!cmd) return;
    
    // se esse comando nao existe envia uma mensagem no canal que o comando foi enviado
    if(!cmd) {
        return msg.reply('esse comando nao existe.').then(msg => {msg.delete(10000)});
    }
  
    // Inicia o comando
    cmd.run(client, msg, args);
  };
