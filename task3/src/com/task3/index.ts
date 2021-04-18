import * as readline from "readline";
import { BinarySearchTree } from "./bst.js";

console.log("Hello world!!! This is my Binary Tree!");

const BST: BinarySearchTree<string> = new BinarySearchTree<string>();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "insert, search, remove, print, exit> "
});

rl.prompt();

rl.on("line", (line) => {
    switch (line.trim()) {
        case "insert":
            rl.question("key = ", (key) => {
                const temp: number = parseInt(key.trim(), 10);
                if (!Number.isNaN(temp)) {
                    rl.question("data = ", (data) => {
                        BST.insert(temp, data.trim());
                        rl.prompt();
                    });
                } else {
                    console.log("invalid key value");
                    rl.prompt();
                }
            });
            break;
        case "search":
            rl.question("key = ", (key) => {
                const temp: number = parseInt(key.trim(), 10);
                if (!Number.isNaN(temp)) {
                    console.log(BST.printNode(BST.search(BST.root, temp), temp));
                } else {
                    console.log("invalid key value");
                }
                rl.prompt();
            });
            break;
        case "remove":
            rl.question("key = ", (key) => {
                const temp: number = parseInt(key.trim(), 10);
                if (!Number.isNaN(temp)) {
                    BST.remove(temp);
                } else {
                    console.log("invalid key value");
                }
                rl.prompt();
            });
            break;
        case "print":
            console.log(BST.print());
            break;
        case "exit":
            console.log("Have a great day!");
            process.exit(0);
            break;
        default:
            console.log("I do not understand this: " + line.trim());
            break;
    }
    rl.prompt();
}).on("close", () => {
    console.log("Have a great day!");
    process.exit(0);
});
