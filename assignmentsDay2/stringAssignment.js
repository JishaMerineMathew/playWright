/* Assignment Details:
Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a
palindrome, then test your function with various strings and print the results.
Assignment Requirements:
Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.
 */

function isPalindrome(inputString){
    let reversed = "";
    let chars = inputString.split("");
    let length = chars.size;
    for(let index=chars.length-1;index>=0;index--){
        reversed = reversed + chars[index];
    }
    console.log("Reversed string is: " + reversed);
   return(inputString===reversed);
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));