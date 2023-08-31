import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync');

export const greeting = () => {
  const playerName = readlineSync.question('May I have your name? ');
  return (`Hello, ${playerName}!`);
};
