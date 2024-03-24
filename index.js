#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussingNumber",
        type: "number",
        message: "Please Guess The Number Between 1-6 =",
    },
]);
if (answer.userGussingNumber === randomNumber) {
    console.log("Congratulation! You Guess The Right Number.");
}
else {
    console.log("You Guess The Wrong Number.");
}
