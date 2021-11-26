
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
If value is neither, noone is cool */
if (value >= 3) {
    console.log(name + " is really cool!")
} else if (value <= 0 ) {
    console.log("You are cool")
} else {
    console.log("Sorry. Try again")
}