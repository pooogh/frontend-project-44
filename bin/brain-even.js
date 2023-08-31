#!/usr/bin/env node
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let mark = true;
let level = 0;
let keyAswer = '';

while (mark === true && level < 3) {
  level += 1;
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number} `);
  const answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0) {
    keyAswer = 'yes';
  } else {
    keyAswer = 'no';
  }
  if (answer === keyAswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${keyAswer}.`);
    mark = false;
  }
}
if (mark === true) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
