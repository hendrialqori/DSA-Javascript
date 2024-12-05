# Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from on position to another. Depending on a certain condition the window either increases or closes (and a new window is created), Very useful for keeping track of a subset of data in array/string etc.

## AN EXAMPLE
Write a function called **maxSubArraySum**, which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.


```.js
function maxSubArraySum(arr, n){
    // logic here
}

maxSubArraySum([1,2,3,4,5,6], 3) => [4,5,6] => 15
maxSubArraySum([], 2) => null
```

## Solution Approach
```.js
arr = [1,2,3,4,5,6,7]
n = 3 // total item of array should be sum each iteration
```

When looping its look like: [1,2,3] => [2,3,4] => [3,4,5] => [4,5,6] => [5,6,7], Then which consecutive array that have largest sum from all of these.


**let's jump into index file!**