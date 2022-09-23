//Complete the instructions for each numbered problem. Each numbered problem is worth 10 points

//1. data types built-in methods, variables

//a. define a variable and give it a string value
console.log("question 1a")
var name 
name = "Faith"
console.log(name);

//b. define a variable and give it a number value
console.log("question 1b");
var x 
x = 30; 
console.log(x);


//c. define a variable and give it a boolean value
console.log("question1c")
var num1
num1 = 2;
console.log(Boolean(num1)); 


//2. if else, ternary
console.log("question2")

//a. define a variable 'metrocard' and give it a value of 5
var metrocard
metrocard = 5;

//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
if (metrocard > 2.75){
    console.log("you have enough to ride the train");
}

//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
else{
    console.log("you do not have enough to pay fare sorry")
}

//d. write the above if/else statement again as a ternary
const user = (metrocard > 2.75) ? "you have enough to ride the train" : "you do not have enough to pay fare sorry";
user;

//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
//add a screenshot showing your completion of this project to the root folder of this repo
console.log("question3")
//4. functions
//a. write a function named helloWorld that returns the value 'Hello World!'
console.log("question4a")
function helloWorld(){
    return "Hello World!";
}

//b. console log the value returned from running the function helloWorld
console.log(helloWorld());

//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
var myArray
myArray = [1,2,3,4,5];

//b. an array's index starts at:
// answer is zero

//4. loops
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0
console.log("question4c");

//5. objects
console.log("question5");
//a. define a variable named 'bike'
var bike
//b. assign an object to bike
bike = type;
//c. give the object 3 properties: handlebars, color, wheels
var type = {handlebars:"4", wheels:"4", color:"white"};
//d. give each property a value

//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8. 
**You do not need to accept user input this differs from Eloquent JS's directions 

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/
console.log("\n")
console.log("question 6")
function chess(){
    const size =8;
    for (let x=0; x<size; x++){
        if (x % 2===0){
            console.log(" # # # #")        }
        else{
            console.log("# # # #")
        }
}
}
chess();
