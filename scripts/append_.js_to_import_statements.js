import * as fs from "fs";
//import * as path from "path";
import * as cp from "child_process";

const WORKING_DIR = process.cwd();
const REG_MATCH = /(from\s+)(["'])(?!.*\.js)(\.?\.\/.*)(["'])/; // https://stackoverflow.com/a/73075563 comment #3
const JS_SRC_ROOT = fs.readdirSync(`${WORKING_DIR}/dist/src/`);

// making this a function for recursion!!
// function getJSFiles(dir, file_array) {
//     file_array = file_array || [];

//     dir.forEach(file => {
//         if(fs.statSync(`${dir}/${file}`).isDirectory()) {
//             file_array = getJSFiles(`${dir}/${file}`, file_array);
//         } else {
//             file_array.push(path.join(__dirname, dir, "/", file));
//         }
//     });

//     return file_array;
// }

const js_file_list = cp.execFileSync("./scripts/shell/append_.js_t_i_s.sh");

console.log(fs.readFileSync("./scripts/tmp/DIST_JS_FILE_LIST.txt"));