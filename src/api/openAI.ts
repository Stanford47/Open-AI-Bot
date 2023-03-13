import * as https from "https";
import settings from "../../settings/settings.json";

export async function GPT_POST() {
    const reqOptions = {
        hostname: "https://api.openai.com/v1/chat/completions",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${settings.OpenAI.apiKey}`
        },
        data : `{}`
    };

    https.request({ headers: { },  })
}