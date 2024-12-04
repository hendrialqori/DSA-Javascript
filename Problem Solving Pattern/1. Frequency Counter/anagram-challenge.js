/**
 * Anagram Challange
 * 
 * Given two strins, write a function to determine if the second string is as anagram of the first.
 * an anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.
 * 
 * Sould O(n)
 */

let value1 = "",
    value2 = ""

/**
 * 
 * @param {String} params1 
 * @param {String} params2 
 */

function validAnagram(params1, params2) {

    if (params1.length !== params2.length) return false

    const params1Map = {};
    const params2Map = {};

    for (const i of params1) params1Map[i] = (params1Map[i] ?? 0) + 1
    for (const i of params2) params2Map[i] = (params2Map[i] ?? 0) + 1

    for (const key in params1Map) {
        if (!(key in params2Map)) return false

        // check frequency
        if (params1Map[key] !== params2Map[key]) return false
    }

    return true
}

console.log(validAnagram(value1, value2))