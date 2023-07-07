const { REST, Routes } = require('discord.js');

// Gets the bot TOKEN(CUIDADO PRA N VAZAR ISSO PELO AMOR DE DEUS)
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

//Imports commands
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
}

//REST instance
const rest = new REST({version:"10"}).setToken(TOKEN);

//deploy
(async() =>{
    try{
        console.log(`Resetando ${commands.length} comandos...`);
        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            {body: commands});
        console.log("Comandos Registrados")
    }catch(error){
        console.error(error)
    }
})()