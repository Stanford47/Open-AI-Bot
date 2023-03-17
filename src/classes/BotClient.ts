import { Client, ChatInputCommandInteraction, Collection, Interaction, REST, ApplicationCommandDataResolvable, Routes, Events } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import settings from "../../settings/settings.json";
import sendErr from "../utils/sendErr";

export class BotClient {
    public readonly token = settings.Discord.token;
    public readonly devIds = settings.Discord.devIds;
    public readonly appId = settings.Discord.appId;
    public readonly startTime = Date.now();
    public readonly webhooks = settings.Discord.Webhooks;

    public slashCommands = new Array<ApplicationCommandDataResolvable>();
    public slashCommandsCollection = new Collection();

    public constructor(public readonly client: Client) {
        this.registerSlashCommands();

        this.client.login(this.token);

        this.client.on("ready", () => {
            // make the ansi stuffs an export or something in a different file later
            console.log(`\u001b[38;5;11mClient:\u001b[0m \u001b[38;5;51m\u001b[4m${this.client.user!.username}${this.client.user!.discriminator}\u001b[0m \u001b[38;5;11mhas successfully logged in!\u001b[0m`); // https://en.wikipedia.org/wiki/ANSI_escape_code
        });
    }

    private async registerSlashCommands() {
        const rest = new REST({ version: "10" }).setToken(this.token);

        const slashCommands = readdirSync(join(__dirname, "..", "commands")).filter(file => file.endsWith(".js"));

        for (const file of slashCommands) {
            const command = await import(join(__dirname, "..", "commands", file));

            this.slashCommands.push(command.default.data);
        }

        await rest.put(Routes.applicationCommands(this.appId), { body: this.slashCommands });
    }

    private async interactionCreate() {
        this.client.on(Events.InteractionCreate, async (interaction: Interaction) => {
            if (!interaction.isChatInputCommand()) return;

            const command = this.slashCommandsCollection.get(interaction.commandName);

            if (!command) return;

            try {
                //@ts-ignore
                command.execute(interaction as ChatInputCommandInteraction, this.startTime); //silly thing... might just ts-ignore tbh
            } catch (err) {
                interaction.reply({ content: `There has been an error while running the command \`${interaction.commandName}\`\nError\`\`\`\n${err}\`\`\``, ephemeral: true });

                sendErr(err, interaction.commandName);
            }
        });
    }
}