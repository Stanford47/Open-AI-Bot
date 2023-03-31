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

        const prompt = interaction.options.getString("prompt", true);

        const req = await new HttpRequest(
            "https://api.openai.com/v1/chat/completions", 
            [settings.OpenAI.apiKey], 
            "POST",
            JSON.parse(`{'model':'gpt-3.5-turbo','messages':[{'role':'user','content':${prompt}}]}`)
        ).makeHttpRequest();

        interaction.editReply(JSON.stringify(req));
    }
}