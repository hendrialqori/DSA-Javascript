/**
 * Multiple Pointers - averagePair
 * 
 * Write a function called averagePair, Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * 
 * averagePair([1,2,3],2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19],8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([],4) // false
 * 
 * Time: O(N)
 * Space: O(1)
 * 
 */

/**
 * 
 * @param {Array} arr 
 * @param {Number} target 
 */
function averagePair(arr, target) {
    
    if(!arr.length) return false

    // 2 pointer, left and right
    let left = 0, right = arr.length - 1;

    while(left < right) {
        
        // average 2 arr base on pointers
        const avg = (arr[left] + arr[right]) / 2;

        if(target === avg) return true;

        /**
         * If average from arr pointers less than target value
         * move left pointer toward right
         * because we need a larger value
         */
        else if(avg < target) left++;

        else right--
    }   

    return false

}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8))