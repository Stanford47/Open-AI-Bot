import { HttpRequest } from "../classes/HttpReq";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import settings from "../../settings/settings.json";

export default {
    data: new SlashCommandBuilder()
        .setName("prompt")
        .setDescription("Gives Chat GPT a prompt to respond to")
        .addStringOption(option =>
            option.setName("prompt").setDescription("prompt for Chat GPT")
        ),
        
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply({ ephemeral: true });

        const request = new HttpRequest(
            "https://api.openai.com/v1/chat/completions",
            {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${settings.OpenAI.apiKey}`
            },
            "POST",
            `{
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": "Hello!"}]
            }`
        ).makeHttpRequest();

        interaction.editReply("pls work");
    }
}