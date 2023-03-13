import { botClient } from "..";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("prompt")
        .setDescription("Gives Chat GPT a prompt to respond to")
        .addStringOption(option =>
            option.setName("prompt").setDescription("prompt for Chat GPT")
        ),
        
    execute(interaction: ChatInputCommandInteraction) {
        
    }
}