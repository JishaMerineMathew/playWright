/* Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript */

function launchBrowser(browserName){
    if(browserName==="chrome"){
       console.log(browserName);
    }
    else{
        console.log('Unsupported Browser - if else if condition');
    }
}
function runTests(testType){
    switch(testType){
        case 'smoke':
            console.log(testType);
            break
        case 'sanity':
            console.log(testType);
            break;
        case 'regression':
            console.log(testType);
            break;
        default:
            console.log('Unsupported Test Type - Switch');
            break;
    }
}
launchBrowser('chrome');
runTests('sanity');

launchBrowser('opera');
runTests('smoke');