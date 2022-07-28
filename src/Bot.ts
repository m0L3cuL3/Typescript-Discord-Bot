import { Client } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'

const token = 'insert token id here'

console.log("Bot is starting...")

const client = new Client({
    intents: [
        'Guilds',
        'GuildMessages',
        'GuildMembers',
        'GuildPresences',
    ]
})

ready(client)
interactionCreate(client)

client.login(token)