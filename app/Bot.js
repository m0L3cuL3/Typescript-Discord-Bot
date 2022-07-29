"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require('dotenv').config();
const discord_js_1 = require("discord.js");
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
const token = process.env.TOKEN_ID;
console.log("Bot is starting...");
const client = new discord_js_1.Client({
    intents: [
        'Guilds',
        'GuildMessages',
        'GuildMembers',
        'GuildPresences',
    ]
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
client.login(token);
