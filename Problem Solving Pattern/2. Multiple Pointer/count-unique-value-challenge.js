/**
 * Count Unique Value Challenge
 * 
 * Implement a function called countUniqueValues, which accepts a sorted array
 * and counts the unique values in the array, there can be negative numbers in the array
 * but it will alwayas be sorted
 * 
 */

/**
 * @param {Array} sortedArray 
 */

function countUniqueValues(sortedArray) {
    /**
     * Solution 1
     */

    // let first = 0;
    // let second = 1;

    // if (!sortedArray.length) return 0

    // while (second < sortedArray.length) {

    //     if (sortedArray[first] === sortedArray[second]) {
    //         second++
    //     } else {
    //         first++
    //         sortedArray[first] = sortedArray[second]
    //     }
    // }
    // return first + 1

    /**
     * Solution 2
     */

    if (!sortedArray.length) return 0;

    let i = 0;

    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] !== sortedArray[j]) {
            i++
            sortedArray[i] = sortedArray[j]
        }
    }

    return i + 1
}


const input = [-3, -3, -2 -2, -1, 0, 1, 2, 3] // => 7
console.log(countUniqueValues(input))