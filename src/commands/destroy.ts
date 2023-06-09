import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("destroy")
    .setDescription("Gives Chat GPT a prompt to respond to"),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply("goodbye!!!");

        interaction.client.destroy();
        process.exit();
  },
};
