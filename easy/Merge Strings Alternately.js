// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
//If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let result = '';
  let word1Array = word1.split('');
	let word2Array = word2.split(''); 
        while (word1Array.length > 0 || word2Array.length > 0) {
            if (word1Array.length > 0) {
              result += word1Array.shift();
            }
            if (word2Array.length > 0) {
              result += word2Array.shift();
            }
        }
        return result;
};