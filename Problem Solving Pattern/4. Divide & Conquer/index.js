/**
 * Naive Solution
 * time complexity is O(N)
 */

/**
 * @param {Array} arr
 * @param {Number} n
 */

function linearSearch(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) return i
    }
    return -1
}

/**
 * Refactory Solution
 * called binary search with Divide and Counquer pattern
 */

/**
 * 
 * @param {Array} arr 
 * @param {Number} target
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1

    while(left <= right) {
        const middle = Math.floor((right + left) / 2)

        if(arr[middle] === target) return middle
        
        else if (target < arr[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1 
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 1))