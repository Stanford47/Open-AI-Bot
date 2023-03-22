"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botClient = void 0;
const discord_js_1 = require("discord.js");
const BotClient_1 = require("./classes/BotClient");
exports.botClient = new BotClient_1.BotClient(new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.DirectMessages,
    ]
}));
//# sourceMappingURL=index.js.map