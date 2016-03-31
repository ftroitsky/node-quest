/**
 * Created by ftroitsky on 20/09/14.
 */

/**
 * Utilities for game
 * @module Utils
 */

/** Matrix function to create 2d array
 * @param {int} x - Number of cells horizontal.
 * @param {int} y - Number of cells vertical.
 * @param {object} value - filler object.
 */
export const matrix = (x, y, value) => {
    let map = [];
    for(var col = 0; col < x; col++){
        var filler = [];
        for(var row = 0; row < y; row++){
            filler[row] = value;
        }
        map[col] = filler;
    }
    return map;
};


/** Checks if value is Int
 * @param {int} value to test
 */
export const isInt = (value) => {
    return typeof value === "number" && isFinite(value) && value%1===0;
};


/** Checks if value is within given range
 * @param {int} value to test
 * @param {int} rangeMin minimum range
 * @param {int} rangeMax maximum range
 */
export const withinRange = (value, rangeMin, rangeMax) => {
    if(isInt(value) === true){
        return rangeMax > value && value  >= rangeMin;
    }
    return false;
};
