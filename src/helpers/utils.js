export const matrix = (x, y, value) => {
  let map = []
  for (var col = 0; col < x; col++) {
    var filler = []
    for (var row = 0; row < y; row++) {
      filler[row] = value
    }
    map[col] = filler
  }
  return map
}

export const isInt = (value) => {
  return typeof value === 'number' && isFinite(value) && value % 1 === 0
}

export const withinRange = (value, rangeMin, rangeMax) => {
  if (isInt(value) === true) {
    return rangeMax > value && value >= rangeMin
  }
  return false
}
