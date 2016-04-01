import Map from './Map';
import Player from './Player';

var map = new Map();


map.setTile(0,0);
map.setTile(0,1);
map.setTile(0,2);
map.setTile(1,2);
map.setTile(2,2);

var player = new Player(map);
console.log(map);

console.log(player.look());
console.log(player.X);
console.log(player.Y);

player.walk('SOUTH');
console.log(player.look());
console.log(player.X);
console.log(player.Y);

player.walk('SOUTH');
console.log(player.look());
console.log(player.X);
console.log(player.Y);

player.walk('EAST');
console.log(player.look());
console.log(player.X);
console.log(player.Y);

player.walk('EAST');
console.log(player.look());
console.log(player.X);
console.log(player.Y);
