/**
 * A map object, contains an array of all tiles
 */

import {matrix, withinRange} from './helpers/utils'
import Tile from './Tile'

export default class Map {
  constructor (x = 5, y = 5) {
    this.bufferX = x
    this.bufferY = y

    /** Tiles array */
    this.tiles = matrix(this.bufferX, this.bufferY, false)
  }

  setTile (x, y, description) {
    const X = this.bufferX
    const Y = this.bufferY

    if (withinRange(x, 0, X) && withinRange(y, 0, Y)) {
      this.tiles[y][x] = new Tile(description)
      return this.tiles[y][x]
    }
    return false
  }

  getTile (x, y) {
    const X = this.bufferX
    const Y = this.bufferY

    const loadTile = (x, y) => {
      return withinRange(x, 0, X) && withinRange(y, 0, Y) && this.tiles[y][x] ? this.tiles[y][x] : false
    }

    if (!withinRange(x, 0, X) || !withinRange(y, 0, Y)) {
      return false
    }

    return {
      current: loadTile(x, y),
      north: loadTile(x, y - 1),
      south: loadTile(x, y + 1),
      east: loadTile(x + 1, y),
      west: loadTile(x - 1, y)
    }
  }

}
