"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
require('dotenv').config({ path: '.env' });
exports.Hello = {
    name: 'hello',
    description: 'Returns a greeting',
    type: 1,
    run: async (client, interaction) => {
        const guild = client.guilds.cache.get(process.env.GUILD_ID);
        let members = await guild?.members.fetch();
        let usernames = members?.map(m => m.user.tag);
        let list = usernames?.join('\n');
        usernames?.forEach(v => {
            console.log('@' + v);
        });
        await interaction.followUp({
            ephemeral: true,
            content: '\n' + '**Hello there!**' + '\n' + list
        });
    }
};
