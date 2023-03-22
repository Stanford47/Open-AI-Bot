"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
class HttpRequest {
    Url;
    headers;
    method;
    constructor(fullUrl, headers, method, data) {
        this.Url = new URL(fullUrl);
        this.headers = headers;
        this.method = method;
    }
    showValues() {
        return `URL:\t${this.Url}\nHeaders:\t${this.headers}\nMethod:\t${this.method}\n`;
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=HttpReq.js.map