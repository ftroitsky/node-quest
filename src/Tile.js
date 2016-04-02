/**
 * Created by ftroitsky on 15/09/14.
 */

/**
 * A tile object, represents a tile with it's properties and array of on-tile objects.
 * @class Tile
 * @constructor
 */

export default class Tile {
    constructor(description = 'Generic tile') {
        /** Description of the tile */
        this.description = description;
        /** The objects array — contains all objects on the tile */
        this.objects = [];
    }

    storeObject(object) {
        try {
            this.objects.push(object);
        } catch (error) {
            console.warn(`Cannot add object to objects collection of tile. \nBecause: ${error.name} \n ${error.message} \n ${error.stack}`);
        }
        return false;
    }

    readObjects() {
        this.objects.map((object)=> {
            // console.log(object);
        });
        return this.objects;
    }
}
