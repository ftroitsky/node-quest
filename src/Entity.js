/**
 * An Entity object, basic block of Entity Component System
 * http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
 */

export default class Entity {
  constructor () {
    Entity.count++
    this.genID()
    this.components = {}
  }

  static get count () {
    return !this._count ? 0 : this._count
  }

  static set count (value) {
    this._count = value
  }

  genID () {
    this._id = (+new Date()).toString(16) +
      (Math.random() * 100000000 | 0).toString(16) + Entity.count
  }

  get id () {
    return this._id
  }

  addComponent (component) {
    this.components[component.constructor.name] = component
    return this.components
  }

  removeComponent (componentName) {
    let name = componentName

    if (typeof componentName === 'object') {
      name = componentName.constructor.name
    }
    delete this.components[name]
    return this.components
  }

  print () {
    console.log(JSON.stringify(this, null, 4))
  }
}
