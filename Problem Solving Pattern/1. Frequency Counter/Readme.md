# Frequency Counter Pattern

This pattern uses objects or sets to collect values/frequency of values, this can often avoid the for
nested loop or O(N^2) with arrays or string.

## What the Frequency is ?
In this context, frequency refer how much an element appear in arrays, example : 
```
arr = [1, 2, 3, 4, 4]

arrFrequency = {
    1: 1,
    2: 2,
    3: 3,
    4: 2
}

```

## AN EXAMPLE
Write a function called **same**, which accepts two arrays. the function should return true if every values in the array has it's corresponding value squared (kuadrat) in the second array, The frequency of values must be the same.

1, 2, 3 have 1 frequency, while 4 have 2 frequency because
its appear 2 times in arrays.

```.js
// Naive Approach

function same(array1, array2){
    // logic here
}

same([1,2,3], [4,1,9]) => true
same([1,3,2], [1,9]) => false
same([1,2,1], [4,4,1]) => false (must be same frequency)

```
**let's jump into index and anagram-challange file!**