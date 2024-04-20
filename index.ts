#! /usr/bin/env node

import inquirer from "inquirer";

const answers:{
    Sentence:string
}  = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message:"Enter your sentence to count the words:"
        }

    ])

    const words = answers.Sentence.trim().split(/\s+/);

    // Print the array of words to the console

    console.log(words);

    //Print the word count of the sentence of the console

    console.log(`Your sentence word count is ${words.length}`);
