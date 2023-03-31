import fetch from "node-fetch";

export class HttpRequest {
    private Url: string; 
    private headers: Array<string>;
    private method: string;
    private data: JSON | undefined;

    constructor(fullUrl: string, headers: Array<string>, method: string, data?: JSON) {
        this.Url = fullUrl;
        this.method = method;
        this.data = data;
        this.headers = headers;

    }

    public showValues(): string {
        return `URL:\t${this.Url}\nHeaders:\t${this.headers}\nMethod:\t${this.method}\n`;
    }

    public async makeHttpRequest(): Promise<JSON | unknown> {
        const response = await fetch(
            this.Url,
            {
                method: this.method,
                body: this.data === undefined ? null : JSON.stringify(this.data),
                headers: 
                {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${this.headers[0]}`
                }
            }
        )


        return response.json();
    }
}