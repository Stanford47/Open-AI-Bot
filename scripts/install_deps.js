//@ts-check
"use strict";

const https = require("https");
const child_process = require("child_process");
const fs = require("fs");

const JDKS = [
  "https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_linux-aarch64_bin.tar.gz",
  "https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_linux-x64_bin.tar.gz",
  "https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_macos-aarch64_bin.tar.gz",
  "https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_windows-x64_bin.zip",
];

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

console.log("\u001b[38;5;184Installing Open JDK\u001b[0m");
switch (process.platform) {
    case "win32":
        child_process.exec(`powershell -c ./shell/install-jdk.ps1 ${JDKS[3]}`);
        break;
    
}