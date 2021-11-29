
/*Demonstrating a multi-line comment with a single symbol.
This is good know for longer comments.
Like this.
 */
var hello = "Hello World";

var value = 3;
//Note that value2 is a different color since its a string (not a number)
var value2 = "3"

//To print things on the screen, use alert
//alert(hello);
//alert(value);

//Or you can console.log it
console.log(hello);
//Check out the difference in color in the console between strings and nums
console.log(value);
console.log(value2);

//A demo comment - adding two numbers
console.log(value + value);

//Boolean logic
var open = true;
console.log(true); //true
console.log(!true); //false
console.log(value == 3) //true

//Conditionals/If statements
var name = "Colin";
//Run something if the conditional is true
if (name == "Colin"){
    console.log(name + " is cool.")
}
//Run something if the conditional is false
if (name !== "John") {
    console.log(name + " is cool.")
}
/* If value is >= 3, I'm cool.
If value is <= 0, you're cool.
If value is neither, no one is cool */
if (value >= 3) {
    console.log(name + " is really cool!")
} else if (value <= 0 ) {
    console.log("You are cool")
} else {
    console.log("Sorry. Try again")
}

/*
If you have a lot of else ifs, you should use a switch statement.
 */
switch (value) {
    case 0:
        console.log("You have none!" + value)
        break
    case 1:
        console.log("You have one!" + value)
        break
    case 2:
        console.log("You have a couple." + value)
        break
    case 3:
        console.log("You have a trio!" + value)
        break
    default:
        console.log("Invalid value!")
}

/*
Arrays
An array is a list of zero or more items.
Items can be strings, numbers, other arrays.
 */
var myList = [1,2,3,4, "Hello", ["You", "Me"]]
//Array items start at "0". You can use the index number to select specific items in the arrary.
console.log(myList)
console.log(myList[4]) // returns Hello
//You can even use it to dig into nested arrays
console.log(myList[5][1]) // returns Me

/*
Intro to Loops
 */

var myList2 = [1,2,3,4,5]
// To loop over items in an array
for(var i = 0; i < myList2.length; i++) {
    console.log(myList2[i])
}

/*
Intro to WHILE Loops
 */
var j = 0
while (j < myList2.length) {
    console.log(myList2[i])
//Remember that while loops have no "built-in" increment (or decrement) operation. You MUST do that to end the loop.
    j++
}

/*
Intro to BREAKS (and a guessing game)
 */
alert("You have 10 guesses. Guess a number 1-10.")
// Hardcoding answer (for now)
var answer = 3;
var guess = prompt("What's your guess?")
// Iterate through each turn
for (k = 0; k < 10; k++) {
    if (answer == guess) {
        alert("You got it right!")
        break
    } else {
        guess = prompt("Nope. Guess again!")
    }
}

/*
Intro to Functions
 */

//This is the function definition - it will not run until the function is called
function firstFunc() {
    console.log("Here is the first function EVER!")
}

//This is calling the function
firstFunc()

/*
Using Arguments within Functions
 */

function secondFunc(arg1) {
    console.log(arg1)
}

function thirdFunc(greeting, name) {
    console.log(greeting, + " ", + name)
}