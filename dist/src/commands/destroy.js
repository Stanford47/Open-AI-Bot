"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("destroy")
        .setDescription("Gives Chat GPT a prompt to respond to"),
    execute(interaction) {
        interaction.client.destroy();
        process.exit();
    },
};
//# sourceMappingURL=destroy.js.map