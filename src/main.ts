console.log('Hello World!');

// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number 

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean

let d = {age: Number};
// A: object

let e = [3]
// A: number

let f;
// A: any

let g = []
// A: any



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: Property 'releaseYear' does not exist on type '

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Type 'number' is not assignable to type 'string'

function myFunc(a: number, b: number): number {}
// A: Argument of type 'string' is not assignable to parameter of type 'number'

// 2 codewars problems in javascript

/* Create a function named (combine_names) that accepts two parameters (first and last name). The function should return the full name.

Example:
combine_names('James', 'Stevens')

returns:
'James Stevens'
*/

function combine_names(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(combine_names('James', 'Stevens'));

/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

console.log(boolToWord(true));