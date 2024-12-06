/**
 * [Frequency Counter] - sameFrequency
 * 
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 * 
 * Sample sameFrequency(182,281) // true
 * sameFrequency(34,14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22,222) // false
 */

/**
 * 
 * @param {Number} value1 
 * @param {Number} value2 
 * @returns
 */

function sameFrequency(value1, value2) {
    const Map1 = {};
    const Map2 = {}

    for (const i of value1.toString()) Map1[i] = ((Map1[1] || 0) + 1);
    for (const i of value2.toString()) Map2[i] = ((Map2[1] || 0) + 1);

    for (const key in Map1) {
        if(!(key in Map2)) return false

        // frequency checker
        if(Map1[key] !== Map2[key]) return false
    }

    return true
}