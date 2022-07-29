require('dotenv').config()
import { Client } from 'discord.js'
import interactionCreate from './listeners/interactionCreate'
import ready from './listeners/ready'

const token = process.env.TOKEN_ID

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