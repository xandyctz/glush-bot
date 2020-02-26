const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

// anexando a configuração ao CLIENTE para que seja acessível em qualquer lugar!
client.config = config;

const fs = require('fs');
const Enmap = require("enmap");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adpter = new FileSync('banco.json')
const db = low(adpter)

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./eventos/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });
  
  client.commands = new Enmap();
  
  fs.readdir("./comandos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./comandos/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });

client.login(config.token);