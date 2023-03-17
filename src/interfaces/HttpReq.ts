/**
 * Template for HTTP requests
 */
export default interface HTTPReq {
    URL: string;
    method: string;
    headers: JSON;
    data?: string;
}