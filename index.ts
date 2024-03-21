#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("Wellcome to my Calculater");
const answer = await inquirer.prompt([
    {message: "Enter your first number", type:"number", name:"firstnumber"},
    {message: "Enter your second number", type:"number", name:"secondnumber"},
    {message: "Selecter one of the operater to perform action", 
    type:"list", 
    name:"operator",
    choices:["Addition","Subtraction","Multipliction","Division"]
    }
  ]);

  if (answer .operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber);
  } else if (answer .operator === "Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
  }else if (answer .operator === "Multipliction"){
    console.log(answer.firstnumber * answer.secondnumber);
  }else if (answer .operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
  }else{
    console.log("error unvalid number");
  };
  console.log("The End'")