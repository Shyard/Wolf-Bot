const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); 
const token = process.env.token; 
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis apte à être utilisé.")
    bot.user.setActivity('Chasser la femelle').catch(console.error)
});


bot.login(token);

