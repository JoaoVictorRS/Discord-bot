//Requires the necessary class from discord.js to create / commands
const { SlashCommandBuilder } = require('discord.js');

//Exports everything inside the keys to index.js
module.exports = {
    
    //setName: use it to set the command name (1-32 characters)
    //setDescription: use it to add an description to the command
	data: new SlashCommandBuilder()
		.setName('oi')
		.setDescription('Responde carinhosamente'),
    
    //Command answer
	async execute(interaction) {
		await interaction.reply('Seu pai tem boi?');
	},
};