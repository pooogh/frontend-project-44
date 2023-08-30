import { createRequire } from 'module';
const require = createRequire(import.meta.url);

var readlineSync = require('readline-sync');

export const greeting = () => {
    let player_name = readlineSync.question('May I have your name? ');
    return (`Hello, ${player_name}!`);
}

//export default greeting()