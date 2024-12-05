/**
 * Naive solution
 * time complexity is O(n^2)
 */


/**
 * @param {Array} arr
 * @param {Number} n
 */

function maxSubArraySum_naive(arr, n) {

    if (arr.length) return null

    const totalIteration = (arr.length - 1) + 1

    let max = 0;
    let sum = 0

    for (let i = 0; i < totalIteration; i++) {

        for (let j = i; j < i + n; j++) {
            sum += arr[j]
        }
        max = Math.max(max, sum)
    }

    return max
}

/**
 * Refactory Solution with Kadane's Algorithms
 * time complexity is O(n)
 */

/**
 * @param {Array} arr 
 * @param {Number} k
 */


function maxSubArraySum_refactor(arr, k) {
    let maxSum = 0, windowSum = 0

    // first, count for first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }

    maxSum = windowSum

    // second, move window into right
    for (let i = k; i < arr.length; i++) {
        
        // move into right operation, 
        // substract with first value of window and added next value of window
        windowSum = windowSum + arr[i] - arr[i - k]

        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

const input = [1, 2, 3, 4, 5, 6, 7, 1, 1, 3]

console.log(maxSubArraySum_refactor(input, 3))