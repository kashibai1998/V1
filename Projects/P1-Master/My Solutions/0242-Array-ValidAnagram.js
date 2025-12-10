// 242. Valid Anagram
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  //creating occurance map of each characters for s
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  //check same characters in t
  for (let c of t) {
    //if char not exists
    if (!map.get(c)) return false;
    //if exists decrement count
    map.set(c, map.get(c) - 1);
    //if count becomes 0 delete
    if (map.get(c) === 0) map.delete(c);
  }

  if (map.size > 0) return false;
  return true;

  // return s.split("").sort().join("") === t.split("").sort().join("")
};

const res = isAnagram("anagram", "nagarams");
console.log(res);

// Time Complexity - O(n)
// Space Complexity - O(n)
