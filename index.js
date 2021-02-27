const { Client } = require('discord.js'); 
const commands = require('./commands.js');
const config = require('./config.json');
require('dotenv').config();

/* Config */
const TOKEN = process.env.TOKEN;
const prefix = process.env.PREFIX || config.prefix;
const subreddits = config.subreddits;

const client = new Client();

// Runs when bot is online
client.on('ready', () => {
    console.log(`Logged in with ${client.user.tag}`);
});

// Runs when user sends a message
client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (message.author.bot) return;

    else if (message.content.toLowerCase() === 'ping') message.channel.send('pong!');
    
    else if (!message.content.startsWith(prefix)) return;

    else if (command === 'meme') {
        const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        
        console.log(`Source subreddit: ${subreddit}`);

        commands.memeGen(message, subreddit);
    }
});


// Logs in the bot with the token
client.login(TOKEN);