/**
 * An Entity object, basic block of Entity Component System
 * http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
 */

export default class Entity {
    constructor() {
        Entity.count++;
        this.genID();
        this.components = {};
    }

    static get count() {
        return !this._count ? 0 : this._count;
    }

    static set count(value){
        this._count = value;
    }

    genID () {
        this._id = (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16) + Entity.count;
    }

    get id () {
        return this._id;
    }

    addComponent ( component ){
        this.components[component.name] = component;
    }

    removeComponent ( componentName ) {
        // Remove component data by removing the reference to it.
        // Allows either a component function or a string of a component name to be
        // passed in
        let name = componentName; // assume a string was passed in

        if(typeof componentName === 'function'){
            // get the name from the prototype of the passed component function
            name = componentName.prototype.name;
        }

        delete this.components[name];
    }

    print () {
        console.log(JSON.stringify(this, null, 4));
    }
}
