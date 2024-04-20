#! /usr/bin/env node

import { constants } from "buffer";
import inquirer from "inquirer";

const currency:any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 277.69,
};

let user_ans = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = currency[user_ans.from]
let toAmount = currency[user_ans.to]
let amount = user_ans.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);