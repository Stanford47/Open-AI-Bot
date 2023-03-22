"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpReq_1 = require("../classes/HttpReq");
const discord_js_1 = require("discord.js");
exports.default = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("prompt")
        .setDescription("Gives Chat GPT a prompt to respond to")
        .addStringOption(option => option.setName("prompt").setDescription("prompt for Chat GPT")),
    execute(interaction) {
        console.log("piss");
        interaction.reply({ content: new HttpReq_1.HttpRequest("https://google.com", { "Content-Type": "this is just a test" }, "GET").showValues(), ephemeral: true });
    }
};
//# sourceMappingURL=prompt.js.map