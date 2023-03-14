//@ts-check
"use strict";

const https = require("https");
const child_process = require("child_process");

console.log("\u001b[38;5;184mInstalling Node modules\u001b[0m");

const node = child_process.exec('npm install', (error, stdout, stderr) => {
    if (error) {
        console.error("Error: \u001b[38;5;211m%s", error);

        return;
    }

    console.log(stdout);
});
node.on('spawn', () => {
    console.log("\u001b[38;5;32mSuccessfully started\u001b[0m \u001b[38;5;184mNode\u001b[0m\u001b[38;5;32m process\u001b[0m");
});

console.log("\u001b[38;5;184Installing g++\u001b[0m");
switch (process.platform) {
    case "win32":
        
}