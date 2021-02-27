const https = require('https');
const { MessageEmbed } = require('discord.js');

module.exports = {
    memeGen: function(message, url) {

        https.get(url, (result) => {
            let body = '';

            result.on('data', (chunk) => body += chunk)

            result.on('end', () => {
                const response = JSON.parse(body);
                const index =response.data.children[Math.floor(Math.random() * 99)+1].data;

                if (index.post_hint !== image) {
                    
                    const text = index.selftext;
                    const textembed = new MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)
                
                    console.log("Sending meme");
                    message.channel.send(textembed);
                }

                let image = index.preview.images[0].source.url('&amp;', '&');
                let title = index.title;
                let link = 'https://reddit.com' + index.permalink;
                let subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    const textembed = new MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    console.log("Sending meme");
                    message.channel.send(textembed)
                }
                console.log(image);

                const imageembed = new MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                
                console.log("Sending meme");
                message.channel.send(imageembed)
            }).on('error', function(e) {
                console.log('Got an error: ', e)
            })
        })
    }
}