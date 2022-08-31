// Juaneva du Plessis Pascal pyramid 

//Javascript program to find sum of all elements up to 30th row in a Pascal triangle.
 
// Function to find sum of all numbers
function pascalSum(n)
{
 
    let sum = 0;
    for (let row = 0; row < n; row++){
        sum = sum + (1 << row);
    }
 
    return sum;
}
 
// calculate up to 30 rows
let n = 30;
console.log(" Sum of all elements : " + pascalSum(n));