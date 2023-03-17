import settings from "../../settings/settings.json";
import * as child_process from "child_process";
import * as https from "https";
import HTTPReq from "../interfaces/HttpReq";
import { OutgoingHttpHeader } from "http";

function parseURL(inURL: string): string[] {
    let urlArr: string[] = new Array();
    let url = new URL(inURL);

    urlArr[0] = url.hostname;
    urlArr[1] = url.pathname;

    return urlArr;
}

/**
 * 
 * @param URL The FULL URL
 * @param headers technically JSON but yk
 * @param data the data must be in JSON because it'll get stringified by the function
 * @param method GET | HEAD | POST | PUT | DELETE | CONNECT | OPTIONS | TRACE | PATCH
 * have a look at https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods for more info
 */
export default async function HttpRequest(URL: string, headers: NodeJS.Dict<OutgoingHttpHeader>, method: string,  data?: JSON) {
    const parsedURL = parseURL(URL);
    const reqOptions = {
        hostname: parsedURL[0],
        path: parsedURL[1],
        headers: headers,
        method: method
    };

    let retObj = {
        data: {},
    };

    let output: string;

    const req = https.request(reqOptions, (res) => {
        //debug stuff
        console.log("Host:\t\001b[38;5;159m%s\001b[0m\nResponse Code:\t\001b[108m%d\001b[0m", reqOptions.hostname, res.statusCode);

        res.setEncoding("utf-8");

        res.on('data', (chunk) => {
            output += chunk;
        });

        res.on('end', () => {
            retObj.data = JSON.parse(output);
            retObj.statusCode = res.statusCode;
        });
    });

    if (data === undefined) { }
}
