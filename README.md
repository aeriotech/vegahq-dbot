# Discord bots with VegaHQ

### WARNING: Don't use this guide, as it is now no longer up to the current API

You can either follow this text guide, or follow along with the podcast episode we hosted about this topic [here](https://www.youtube.com/watch?v=9XHc0NEV3QU). It is however in Slovenian.

## First steps

1. Register a bot with discord [here](https://discord.com/developers/applications)
2. Grab the token
3. Proceed to setup

###### !!Disclaimer Never reveal your token to anyone you don't trust

## Setup

### 1. Initialize the node project
```bash
npm init -y
```
If you don't have node and npm installed, you can install them from [here](https://nodejs.org/en/).
After installation, verify it with `node -v` and `npm -v`.

### 2. After we initialize the node project, we create three files named: `.gitignore`, `.env` and `index.js`.

### 3. Then we execute:
```bash
npm install discord.js dotenv
```

By now our file structure should look like this:
```
|   node_modules
|   .env
|   .gitignore
|   index.js
|   package-lock.json
|   package.json
└── README.md
```

### 4. Then We set our file contents to this:

##### .gitignore
```
.env
node_modules/
```

#### .env
```
TOKEN=yourDiscordBotToken
```

#### index.js
```js
// Imports necessary libs and initializes discord client
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config(); // Inits dotenv config

const TOKEN = process.env.TOKEN; // Grabs our token from the .env file

client.login(TOKEN); // Logs in the bot with our token

// Logs the tag of our bot and console logs on ready
client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}`);
});
```

#

###### Links:
VegaHQ: [Twitch](https://www.twitch.tv/vegahqslo), [website](https://vegahq.com), [Instagram](https://www.instagram.com/vega.hq/), [Twitter](https://twitter.com/vega_hq), [YouTube](https://www.youtube.com/channel/UC8wGcZ_LijXcNPHE379BorA)

Authors: [Aiken-Twitter](https://twitter.com/AikenAhac), [Aiken-Instagram](https://www.instagram.com/ahacaiken/), [Gašper-Twitter](https://twitter.com/gapi_dev), [Gašper-Instagram](https://www.instagram.com/gasper.db/)
