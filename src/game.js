import Map from './Map';
import Player from './Player';
import readline from 'readline';
import colors from 'colors';


var map = new Map();


map.setTile(0,0, 'Sand all around you, not a single plant grows here,\nnot a single drop of water for a long time have touched this cursed land.');
map.setTile(0,1, 'You came to the rocky area, and found a vast ravine.\nIt looks like you have found an oasis! There is only one way further, down to the valley.');
map.setTile(0,2, `You are on a steep path to the bottom of a valley.\nThere is a river running fast through the ravine.`);
map.setTile(1,2, `You came to the bank of the river.\nThe water is fast and deep. Don't you dare to cross!`);
map.setTile(2,2, `Suddenly lush green grass surrounds you.\nThe landscape is gently sloping here. You see a small house standing by the river.\nWalls covered in withered pink paint.`);

var player = new Player(map);

process.stdout.write('\u001B[2J\u001B[0;0f');

console.log('Hello & welcome to The Quest.'.yellow);
console.log(`Check prompt for exits (${'nswe'.green}). Type exit letter to move around.`);
console.log(`____________\n`);

console.log(player.look().where);
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(`${player.look().exits}> `.green);
rl.prompt();

rl.on('line', (line) => {
    switch(line.trim().toLowerCase()) {
        case 'n':
            player.walk('NORTH');
            break;
        case 's':
            player.walk('SOUTH');
            break;
        case 'e':
            player.walk('EAST');
            break;
        case 'w':
            player.walk('WEST');
            break;
        default:
            console.log(`Say what? I might have heard '${line.trim()}'`.red);
            break;
    }
    console.log(player.look().where);
    rl.setPrompt(`${player.look().exits}> `.green);

    rl.prompt();
}).on('close', () => {
    console.log('\n\nBye!');
    process.exit(0);
});
