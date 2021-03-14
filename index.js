const { Client } = require('discord.js'); 
const { memeGen } = require('./commands.js');
const { playMusic, stopMusic, getQueue } = require('./commands/music.js')
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
client.on('message', async message => {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.toLowerCase() === 'ping') await message.channel.send('pong!');

    switch (command) {
        case 'meme':
            const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)]
            console.log(`Source subreddit: ${subreddit}`)
            memeGen(message, subreddit)
            break

        case 'play':
            await playMusic(message, args[0])
            break

        case 'stop':
        case 'die':
            await stopMusic(message)
            break

        case 'queue':
            getQueue(message)
            break

    }

})


// Logs in the bot with the token
client.login(TOKEN);