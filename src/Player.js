
/** Player class
 * @class Player
 * @constructor
 * @param name — Name of player
 * @param description — Description of player
 * */
class Player {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.inventory = [];
    }

    pick(item) {
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
}
