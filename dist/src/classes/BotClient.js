"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotClient = void 0;
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const path_1 = require("path");
const settings_json_1 = __importDefault(require("../../settings/settings.json"));
const sendErr_1 = __importDefault(require("../utils/sendErr"));
class BotClient {
    client;
    token = settings_json_1.default.Discord.token;
    devIds = settings_json_1.default.Discord.devIds;
    appId = settings_json_1.default.Discord.appId;
    startTime = Date.now();
    webhooks = settings_json_1.default.Discord.Webhooks;
    slashCommands = new Array();
    slashCommandsCollection = new discord_js_1.Collection();
    constructor(client) {
        this.client = client;
        this.registerSlashCommands();
        this.client.login(this.token);
        this.client.on("ready", () => {
            // make the ansi stuffs an export or something in a different file later
            console.log(`\u001b[38;5;11mClient\u001b[0m \u001b[38;5;51m\u001b[4m${this.client.user.username}#${this.client.user.discriminator}\u001b[0m \u001b[38;5;11mhas successfully logged in!\u001b[0m`); // https://en.wikipedia.org/wiki/ANSI_escape_code
        });
        this.interactionCreate();
    }
    async registerSlashCommands() {
        var _a;
        const rest = new discord_js_1.REST({ version: "10" }).setToken(this.token);
        const slashCommands = (0, fs_1.readdirSync)((0, path_1.join)(__dirname, "..", "commands")).filter((file) => file.endsWith(".js"));
        for (const file of slashCommands) {
            const command = await (_a = (0, path_1.join)(__dirname, "..", "commands", file), Promise.resolve().then(() => __importStar(require(_a))));
            console.log(`\u001b[38;5;11mLoaded command:\t\u001b[4m\u001b[38;5;46m${command.name}\u001b[0m`);
            this.slashCommands.push(command.default.data);
            this.slashCommandsCollection.set(command.default.data.name, command.default);
        }
        await rest.put(discord_js_1.Routes.applicationCommands(this.appId), { body: this.slashCommands });
    }
    async interactionCreate() {
        this.client.on(discord_js_1.Events.InteractionCreate, async (interaction) => {
            if (!interaction.isChatInputCommand())
                return;
            const command = this.slashCommandsCollection.get(interaction.commandName);
            if (!command)
                return;
            try {
                command.execute(interaction); //silly thing... might just ts-ignore tbh
            }
            catch (err) {
                interaction.reply({
                    content: `There has been an error while running the command \`${interaction.commandName}\`\nError\`\`\`\n${err}\`\`\``,
                    ephemeral: true,
                });
                (0, sendErr_1.default)(err, interaction.commandName);
            }
        });
    }
}
exports.BotClient = BotClient;
//# sourceMappingURL=BotClient.js.map