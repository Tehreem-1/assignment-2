"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TASK 3 
async function waitAndGreet(name) {
    await setTimeout(() => console.log(`Hello ${name}`), 2000);
}
waitAndGreet("Tehreem Shahid");
