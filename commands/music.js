const youtube = require('ytdl-core-discord')

const queue = []
let connection, isPlaying = false, textChannel

const playMusic = async (message, url) => {

    const voiceChannel = message.member.voice.channel;
    textChannel = message.channel
    queue.push(url)

    if (!voiceChannel) {
        message.channel.send('Please join a voice channel')
        return
    }

    if (!connection) {
        connection = await voiceChannel.join()
    }

    if (connection.channel !== voiceChannel) {
        message.channel.send('Please join my voice channel to add music')
        return
    }

    message.channel.send('Added to queue')
    if (!isPlaying)
        await play()

}

const play = async () => {
    if (!connection || queue.length === 0) return

    const url = queue.shift()
    textChannel.send(`Playing ${url}`)
    const dispatcher = connection.play(await youtube(url), { type: 'opus' })

    dispatcher.on('speaking', async (isSpeaking) => {
        isPlaying = isSpeaking
        if (!isSpeaking) {
            await play()
        }
    })

}

const stopMusic = async (message) => {

    message.guild.voice.connection.disconnect()
    connection = null

}

const getQueue = (message) => {
    if (queue.length)
        message.channel.send(queue.join('\n'))
    else
        message.channel.send('No songs is queue')
}

module.exports = {
    playMusic,
    stopMusic,
    getQueue,
}