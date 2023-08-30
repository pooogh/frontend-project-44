var readlineSync = require('readline-sync');

const greeting = () => {
    let player_name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${player_name}!`);
}

//export default greeting;