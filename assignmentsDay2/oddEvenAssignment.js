/* Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.
Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result */


function isOddOrEven(input){
    return(input%2==0) ? "EVEN" : "ODD" ;
}

let value = isOddOrEven(24);
console.log(value);

value = isOddOrEven(23);
console.log(value);