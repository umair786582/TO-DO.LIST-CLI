#! /usr/bin/env node
import inquirer from "inquirer";
let shopping = [];
let windowShoping = true;
while (windowShoping) {
    console.log("Welcome in task list");
    let addtask = await inquirer.prompt([
        {
            name: "stuff",
            type: "input",
            message: "what do you want to add in your task list?"
        },
        {
            name: "addmore_stuff",
            type: "confirm",
            message: "do you want to add more in list?",
            default: false
        }
    ]);
    shopping.push(addtask.stuff);
    windowShoping = addtask.addmore_stuff;
    console.log(shopping);
}
