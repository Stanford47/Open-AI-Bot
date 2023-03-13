import { Client, GatewayIntentBits } from "discord.js";
import { BotClient } from "./classes/BotClient";

export const botClient = new BotClient(new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ]
}));