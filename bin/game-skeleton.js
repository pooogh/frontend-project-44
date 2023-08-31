#!/usr/bin/env node
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync');

export default function gameSkeleton(greetText, gameFilling) {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(`${greetText}`);

  for (let i = 0; i < 3; i += 1) {
    const gameData = gameFilling();

    console.log(`Question: ${gameData[0]} `);

    const answer = readlineSync.question('Your answer: ');
    const keyAswer = String(gameData[1]);

    if (answer === keyAswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${keyAswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
}
