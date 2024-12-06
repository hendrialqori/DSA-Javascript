/**
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * 
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true 
 * areThereDuplicates('a', 'b', 'c', 'a') // true 
 * 
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 * 
 */

/**
 * 
 * @param  {...any} params 
 * @returns 
 */

function areThereDuplicates(...params) {
    const map = {}
    
    for(let i of params) map[i] = ((map[i] || 0) + 1)
    
    for(const key in map) {
        if(map[key] > 1) return true
    }
    
    return false
}