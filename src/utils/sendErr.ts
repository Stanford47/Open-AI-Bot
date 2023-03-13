import { botClient } from "..";
import { WebhookClient, EmbedBuilder } from "discord.js";

export default async function (errorMsg: unknown, commandName: string): Promise<any> {
    const errClient = new WebhookClient({ url: botClient.webhooks.Errors.URL }).send({ embeds: [new EmbedBuilder().setTitle(`Error while executing ${commandName}`).setDescription(`\`\`\`\n${errorMsg}\`\`\``)] });
}