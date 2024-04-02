/* Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result. */

function studentScore(score){
    switch(true){
        case (score <= 100 && score >= 80):
            return("A+");
            break;
        case (score>65 && score<=80):
            return 'A';
            break;
        case (score>50 && score<=65):
            return 'B';
            break;
        case (score>40 && score<=50):
            return 'C';
            break;
        case (score<=40):
            return 'F';
            break;
    }
}

let score = 85;
console.log(studentScore(score));
score = 40;
console.log(studentScore(score));
score = 67;
console.log(studentScore(score));