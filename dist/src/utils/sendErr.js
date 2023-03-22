"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const discord_js_1 = require("discord.js");
async function default_1(errorMsg, commandName) {
    const errClient = new discord_js_1.WebhookClient({ url: __1.botClient.webhooks.Errors.URL }).send({ embeds: [new discord_js_1.EmbedBuilder().setTitle(`Error while executing ${commandName}`).setDescription(`\`\`\`\n${errorMsg}\`\`\``)] });
}
exports.default = default_1;
//# sourceMappingURL=sendErr.js.map