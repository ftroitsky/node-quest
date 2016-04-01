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
        this.map = map;
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
        // const l = this.location;
        // let exits = [];
        // if (l.north) exits.push('n');
        // if (l.south) exits.push('s');
        // if (l.east) exits.push('e');
        // if (l.west) exits.push('w');
        // return  exits;
        // return this.map;
        return this.location;
    }

    walk(direction) {

        const goTo = (tile, x, y) => {
            return tile ? ()=> {
                this.X = x;
                this.Y = y;
            } : false;
        };

        switch (direction) {
            case 'NORTH':
                return goTo(
                    this.location.north,
                    this.X, this.Y-1
                );
            case 'SOUTH':
                return goTo(
                    this.location.south,
                    this.X, this.Y+1
                );
            case 'EAST':
                return goTo(
                    this.location.east,
                    this.X+1, this.Y
                );
            case 'WEST':
                return goTo(
                    this.location.west,
                    this.X-1, this.Y
                );
        }

    }

}
