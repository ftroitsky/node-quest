/** Player class
 * @class Player
 * @constructor
 * @param {object} map — a map object
 * @param {int} x — horizontal coordinate of tile
 * @param {int} y — vertical coordinate of tile
 * */

export default class Player {
    constructor(map, x = 0, y = 0) {
        this.name = 'Hero';
        this.description = 'Action man, expert swordsman, salted warrior';
        this.inventory = [];

        this.X = x;
        this.Y = y;
        this.Map = map;
        this.location = map.getTile(x, y);
    }

    pick(item) {
        // need to implement
        return this.inventory.push(item);
    }

    drop(item) {
        let dropped;

        const index = this.inventory.indexOf(item);
        if (index > -1) {
            dropped = this.inventory.splice(index, 1);
            return dropped;
        }
        return false;
    }

    showInventory () {
        return this.inventory;
    }

    look() {
        const l = this.location;
        let exits = [];
        if (l.north) exits.push('n');
        if (l.south) exits.push('s');
        if (l.west) exits.push('w');
        if (l.east) exits.push('e');
        return  {
            where: l.current.description,
            exits: exits.join("")
        };
        // return this.map;
    }

    walk(direction) {

        const goTo = (x, y) => {
            this.X = x;
            this.Y = y;
            this.location = this.Map.getTile(this.X, this.Y);
        };
        
        const noWay = (direction) => {
            console.log(`Can't go ${direction.toLowerCase()}`);
            return false;
        };
        
        switch (direction) {
            case 'NORTH':
                return this.location.north ?
                    goTo(this.X, this.Y - 1) : noWay(direction);
            case 'SOUTH':
                return this.location.south ?
                    goTo(this.X, this.Y+1) : noWay(direction);
            case 'EAST':
                return this.location.east ?
                    goTo(this.X+1, this.Y) : noWay(direction);
            case 'WEST':
                return this.location.west ?
                    goTo(this.X-1, this.Y) : noWay(direction);
        }

    }

}
