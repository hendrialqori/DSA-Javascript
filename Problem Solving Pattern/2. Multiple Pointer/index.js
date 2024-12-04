/**
 * Naive solution
 * time complexity is O(n^2)
 */

/**
 * @param {Array} sorterArray 
 */

function sumZero_naive(sorterArray) {
    for (let i = 0; i < sorterArray.length; i++) {
        for (let j = i + 1; j < sorterArray.length; j++) {
            if (sorterArray[i] + sorterArray[j] === 0) {
                return [sorterArray[i], sorterArray[0]]
            }
        }
    }
}

//=======================================//

/**
 * Refactory Solution
 * time complexity is O(N)
 * space complexity is O(1) / linear
 */

/**
 * @param {Array} sorterArray 
 */

function sumZero_refactor(sorterArray) {

    // 2 pointer, left and right
    let left = 0;
    let right = sorterArray.length - 1 // last index of array

    // while value left value dont overlap right value, iteration keep going 
    while (left < right) {
        const sum = sorterArray[left] + sorterArray[right]

        // if sum is equal to zero, return
        if (sum === 0) return [sorterArray[left], sorterArray[right]]

        // if sum greather that 0, decrease pointer right value
        else if (sum > 0) right--;

        // otherwise, increase pointer left value
        else left++

    }
}

console.log(sumZero_refactor([-3, -2, -1, 0, 1, 2, 3]))