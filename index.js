
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
        
    }
 
});

client.on('interactionCreate', async message => {
	
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const command = message.content.slice(prefix.length);
	if (command === 'paid') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});

client.login(config.BOT_TOKEN);


