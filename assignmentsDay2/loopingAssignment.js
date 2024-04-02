/* Assignment Details:
Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
Assignment Requirements:
1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode
2. Call that function from the javascript */

function printOddNumbers(){
    for(let index=1;index<=25;index++){
        if(index%2!=0){
            console.log(index);
        }
    }
}

printOddNumbers();