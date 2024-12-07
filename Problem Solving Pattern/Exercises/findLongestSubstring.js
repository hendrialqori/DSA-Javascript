/**
 * Sliding Window - findLongestSubstring
 * 
 * Write a function called findLongestSubstring,
 * which accepts a string and returns the length of the longest substring with all distinct characters.
 * 
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('thecatinthehat') // 7
 * findLongestSubstring('bbbbbb') // 1
 * findLongestSubstring('longestsubstring') // 8
 * findLongestSubstring('thisishowwedoit') // 6
 * 
 * Time Complexity - O(n)
 */

/**
 * 
 * @param {String} s 
 */

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    
    let maxLen = 0, start = 0, hashMap = {};
    
    for(let end = 0; end < str.length ; end++) {
          const lastChars = str[end]
          
          hashMap[lastChars] = (hashMap[lastChars] || 0) + 1;
          
          while(hashMap[lastChars] > 1) {
              const startChars = str[start]

              // decrease value in hashMap if more than 1
              hashMap[startChars]--

            //move forward start pointer
              start++
              
          }
        
          /**
           * end = current index loop
           * start = start index
           * 1 = index start from 0, so therefore increment 1
           */
          maxLen = Math.max(maxLen, end - start + 1)
    }
    
    return maxLen
  }
  

console.log(findLongestSubstring('thisisawesome'))