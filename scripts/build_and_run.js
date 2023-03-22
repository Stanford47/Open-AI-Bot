"use strict";
//@ts-check

const cp = require("child_process");

const ARGS = process.argv;
const PLATFORM = process.platform;

if (PLATFORM === "win32") {
    // Param 1 = --clean?
    // Param 2 = --verbose?
    // Param 3 = run?
    // ALL ARE REQUIRED
    console.log(ARGS.slice(2).join(" "));

    const pShellChild = cp.exec(`powershell -c scripts/shell/build_and_run.ps1 ${ARGS.slice(2).join(" ")}`, (error, stdout, stderr) => {
    if (error) {
        console.error("Error: \u001b[38;5;211m%s\u001b[0m", error);

        return;
    }

    console.log(stdout);
    });
    
    pShellChild.on("spawn", () => {
      console.log(
        "\u001b[38;5;32mSuccessfully started\u001b[0m \u001b[38;5;184mPowershell\u001b[0m\u001b[38;5;32m process\u001b[0m"
      );
    });
}