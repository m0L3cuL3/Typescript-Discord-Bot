import 'dotenv'
import { CommandInteraction, Client } from 'discord.js'
import { Command } from '../Command'



export const Hello: Command = {
    name: 'hello',
    description: 'Returns a greeting',
    type: 1,
    run: async (client: Client, interaction: CommandInteraction) => {
        const guild = client.guilds.cache.get(process.env.GUILD_ID)

        let members = await guild?.members.fetch()
        let usernames = members?.map(m => m.user.tag)
        
        let list = usernames?.join('\n')

        usernames?.forEach(v => {
            console.log('@'+v)
        });
        // console.log(usernames?.join('\n'))

        await interaction.followUp({
            ephemeral: true,
            content: '\n' + '**Hello there!**' + '\n' + list
        })
    }
}
