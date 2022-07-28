import { CommandInteraction, Client, EmbedBuilder } from 'discord.js'
import { Command } from '../Command'

export const Hello: Command = {
    name: 'hello',
    description: 'Returns a greeting',
    type: 1,
    run: async (client: Client, interaction: CommandInteraction) => {
        const guild = client.guilds.cache.get("insert server id here")

        let members = await guild?.members.fetch()
        let usernames = members?.map(m => m.user.username)

        
        let list = usernames?.join('\n')

        console.log(usernames?.join('\n'))

        await interaction.followUp({
            ephemeral: true,
            content: '\n' + '**Chads**' + '\n' + list
        })
    }
}
