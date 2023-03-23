import fetch, { Headers } from "node-fetch";
import settings from "../../settings/settings.json";
import HttpReturn from "../interfaces/HttpRequestRetrun";

export class HttpRequest {
    private Url: string;
    private headers: Object;
    private method: string;
    private data: JSON | undefined | string;

    constructor(fullUrl: string, headers: Object, method: string, data?: JSON | string) {
        this.Url = fullUrl;
        this.headers = headers;
        this.method = method;
        this.data = data;
    }

    public showValues(): string {
        return `URL:\t${this.Url}\nHeaders:\t${this.headers}\nMethod:\t${this.method}\n`;
    }

    public makeHttpRequest(): JSON {
        fetch(this.Url, {
            method: this.method,
            headers: new Headers(this.headers),
            
        });

        return JSON.parse("");
    }
}