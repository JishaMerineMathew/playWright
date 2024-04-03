/* Assignment Details:
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
 */
console.log("-----------------length Of Last Word In The String-----------------------");
function example1(inputString){
    let chars = inputString.trim().split(" ");
    let charssize = chars.length;
    let lastWord = chars[charssize-1];
    console.log(lastWord.length);
}
example1("Hello World");
example1(" fly me to the moon ");

/* Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters. */
console.log("-----------------isAnagram-----------------------");
function isAnagram(inputString1, inputString2){
    if(inputString1.length==inputString2.length){
        for(let index=inputString1.length-1;index>=0;index--){
            let chars1 = inputString1.split("");
            let chars2 = inputString2.split("");
            if(chars2.includes(chars1[index])){
                continue;
            }
            else{
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));