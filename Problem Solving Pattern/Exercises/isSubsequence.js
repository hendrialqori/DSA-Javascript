/**
 * Multiple Pointers - isSubsequence
 * 
 * Write a function called isSubsequence which takes in two strings and checks whether
 * the characters in the first string form a subsequence of the characters in the second string. 
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
 * without their order changing.
 * 
 * Examples:
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 * 
 * Time Complexity - O(N + M)
 *  Kompleksitas waktu O(N + M) sering muncul dalam kasus di mana dua struktur data atau dua input yang terpisah
 *  diproses secara independen satu sama lain, dengan masing-masing memiliki ukuran yang berbeda.
 *  Contohnya adalah kasus iterasi linier pada dua array yang panjangnya berbeda. - Source : Chat GPT
 * 
 * Space Complexity - O(1)
 */

/**
 * 
 * @param {String} s, Represent first string
 * @param {String} t, Represent second string
 */

function isSubsequence(s, t) {
    // base case
    if(!s || !t) return

    let i = 0;

    for(let j = 0; j < t.length; j++) {
        if(s[i] === t[j]) i++;
    }

    return i === s.length
}

console.log(isSubsequence("abc", "aba"))