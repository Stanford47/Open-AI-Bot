import { request } from "https";
import settings from "../../settings/settings.json";
import HttpReturn from "../interfaces/HttpRequestRetrun";

export class HttpRequest {
    private Url: URL;
    private headers: Object;
    private method: string;
    private data: JSON | undefined | string;

    constructor(fullUrl: string, headers: object, method: string, data?: JSON | string) {
        this.Url = new URL(fullUrl);
        this.headers = headers;
        this.method = method;
        this.data = data
    }

    public showValues(): string {
        return `URL:\t${this.Url}\nHeaders:\t${this.headers}\nMethod:\t${this.method}\n`;
    }

    public printReturnValues() { }

    public async makeHttpRequest(): Promise<HttpReturn> {
        const reqOptions: Object = {
            hostname: this.Url.hostname,
            path: this.Url.pathname,
            method: this.method,
            headers: this.headers,
            data: this.data
        }
        const req = request(reqOptions, (res) => {
            let tempData: string = "";
            res.setEncoding("utf-8");

            res.on("data", (chunk) => tempData += chunk);
            
            res.on("end", () => {

            });
        });

        return requestReturn;
    }
}