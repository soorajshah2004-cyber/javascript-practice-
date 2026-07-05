const prompt = require("prompt-sync")();

Ques1) Accept an integer and print hello world n times

let n = Number(prompt("Enter a number to print hello world n times"));
for(let i =1; i<=n; i++){
    console.log("Hello World");    
}
