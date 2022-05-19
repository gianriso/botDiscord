
const Discord = require("discord.js");
const config = require("./config.json");
const os = require('os');
const getIP = require('external-ip')();
'use strict';

const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    console.log('El bot ha arrancado correctamente');
});

client.on('message', (message) => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const command = message.content.slice(prefix.length);
    
    if (command === "status") {
        message.channel.send(os.hostname() + 
        "\ttiene un tiempo\t" + os.uptime + 
        " segundos de uso, desde el usuario:\t" + os.userInfo().username);
        
    }else if (command==="recursos"){
        var mem= (os.freemem()*9.31)/10000000000 ;
        var total= (os.totalmem()*9.31)/10000000000 ;
        mem=parseFloat(mem).toFixed(2);
        total= parseFloat(total).toFixed(2);
        message.channel.send("hay una memoria libre  de :\t" +mem+"GB"+ " de un total en: \t"+ total+"GB");

    }else if(command==="ip"){

        getIP((err, ip) => {
            if (err) {
                throw err;
            }
            //console.log(ip);
            message.channel.send("la ip externa es: " + ip);
        });
       
    }
 
});

client.login(config.BOT_TOKEN);


