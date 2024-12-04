# Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and move toward the begining, end or middle based on a certain condition.
**Very** efficient for solving problems with minimal space complexity as well 

## AN EXAMPLE
Write a function called **sumZero**, which accepts as sorted array of integers. the function should find the first pair where the sum is 0, Return an array that includes both value that sum to zero or undefined if a pair doesn't exists.

```.js
function sumZero(sortedArray){
    // logic here
}

sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3]
sumZero([-2, 0, 1, 2]) => undefined
```
**let's jump into index file!**