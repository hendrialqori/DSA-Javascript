/**
 * Naive
 * time complexity is O(n ^ 2)
 */

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function same_naive(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    for (const i of arr1) {
        const correctIndex = arr2.indexOf(i ** 2)
        if (correctIndex == -1) return false
        arr2.splice(correctIndex, 1)
    }

    return true
}


/**
 * Refactory
 * time complexity is O(n) 
 */


/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function same_refactory(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    const arr1Map = {};
    const arr2Map = {};

    for (const i of arr1) arr1Map[i] = (arr1Map[i] ?? 0) + 1;
    for (const i of arr2) arr2Map[i] = (arr2Map[i] ?? 0) + 1;

    for (const key in arr1Map) {
        const square = key ** 2;

        if (!(square in arr2Map)) return false

        // check frequency value of key
        if (arr2Map[square] !== arr1Map[key]) return false
    }

    return true
}

console.log(same_refactory([1, 2, 3, 4, 4], [1, 4, 9, 16, 20]))