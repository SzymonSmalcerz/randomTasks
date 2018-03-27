//just kind of too small and often too easy to give them own file


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	You have to return the digits of this number within an array in reverse order.

	Example:

	348597 => [7,9,5,8,4,3]
*/


function digitize(n) {
  return n.toString().split("").reverse().map(val => parseInt(val))
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	If the number has an integer square root, take this, otherwise square the number.

	[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/


function squareOrSquareRoot(array) {
  return array.map(val => Math.floor(Math.sqrt(val)) == Math.sqrt(val) ? Math.sqrt(val) : Math.pow(val,2))
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	In this kata you will have to write a function called fuelPrice 
	(fuel_price in PHP, Python) that takes litres and pricePerLiter as arguments. 
	Purchases of 2 or more litres get a discount of 5 cents per litre, purchases 
	of 4 or more litres get a discount of 10 cents per litre, and so on every two 
	litres, up to a maximum discount of 25 cents per litre. But total discount 
	per liter cannot be more than 25 cents. round answer to 2 decimal places. 
	Also you can guess that there will not be negative or non-numeric inputs.

	!Good Luck!

*/



function fuelPrice(li, pp) {
  return Number((li * (pp - Math.min(0.25,(Math.floor(li/2) * 0.05)))).toFixed(2))
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	You get an array of numbers, return the sum of all of the positives ones.

	Example [1,-4,7,12] => 1 + 7 + 12 = 20

	Note: array may be empty, in this case return 0.
*/


function positiveSum(arr) {
  return arr.reduce((total,val) => val > 0 ? val + total : total,0)
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	Description:
	Remove a exclamation mark from the end of string. For a beginner kata, 
	you can assume that the input data is always a string, no need to verify it.

	Examples
	remove("Hi!") === "Hi"
	remove("Hi!!!") === "Hi!!"
	remove("!Hi") === "!Hi"
	remove("!Hi!") === "!Hi"
	remove("Hi! Hi!") === "Hi! Hi"
	remove("Hi") === "Hi"
	Note
	Please don't post issue about difficulty or duplicate.
*/


function remove(s){
  return s[s.length -1] === "!" ? s.slice(0,s.length - 1) : s;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	return string with every character repeated twice (for example : "simon" => "ssiimmoonn")

*/

function doubleChar(str) {
  return str.split("").map(char => char+char).join("");
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	1st (1)   2nd (3)    3rd (6)
	*          **        ***
    	           *         **
                      	     *
*/

// Return the nth triangular number
function triangular( n ) {
  return n <= 0 ? 0 : n + triangular(n-1)
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

function fakeBin(x){
  return x.split("").map(val => parseInt(val) < 5 ? 0 : 1).join("");
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

	Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

	If bonus is true, the salary should be multiplied by 10. If bonus is false, 
	the fatcat did not make enough money and must receive only his stated salary.

	Return the total figure the individual will receive as a string prefixed with 
	"£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python).



*/

function bonusTime(salary, bonus) {
  return bonus ? "£" + (salary * 10) : "£" + salary;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

	Your task is to make 'Past' function which returns time converted to miliseconds.

	#####Example:

	past(0, 1, 1) == 61000
	Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

*/

function past(h, m, s){
  return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000
}




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

	Consider an array of sheep where some sheep may be missing from their place. 
	We need a function that counts the number of sheep present in the array (true means present).

	For example,

	[true,  true,  true,  false,
	  true,  true,  true,  true ,
	  true,  false, true,  false,
	  true,  false, false, true ,
	  true,  true,  true,  true ,
	  false, false, true,  true]
	The correct answer would be 17.

	Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((total,val) => val ? total + val : total,0);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/*

According to the creation myths of the Abrahamic religions, Adam and Eva were the first Humans to wander the earth.

You have to do God’s job. The creation method must return an array of length 2 containing objects representing Adam and Eva. The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

*/

class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man(),new Woman()]
  }
}
// code

class Human {
  constructor(){}
}
class Man extends Human{
  constructor(){
    super()
  }
}
class Woman extends Human{
  constructor(){
    super()
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/*

Write function avg which calculates average of numbers in given list.

*/

function find_average(array) {
  return array.reduce((total,val) => total+val,0)/array.length;
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


/*

Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

*/

var breakChocolate = function(n, m) {
  return m && n ? n*m - 1 : 0;
};x

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!
The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].

*/


function countPositivesSumNegatives(input) {
    return (input && input.length > 0) ? input.reduce((arr,val) => {
      val > 0 ? arr[0] += 1 : arr[1] += val;
      return arr;
    } ,[0,0]) : [];
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

	Write a function called repeatStr which repeats the given string string exactly n times.

	repeatStr(6, "I") // "IIIIII"
	repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


*/

function repeatStr (n, s) {
  return s.repeat(n)
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*


Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

Examples
divide(2) === false // 2 = 1 + 1
divide(3) === false // 3 = 1 + 2
divide(4) === true  // 4 = 2 + 2
divide(5) === false // 5 = 2 + 3
divide(6) === true  // 6 = 2 + 4


*/
function divide(weight){
  return weight>2 && (weight-2)%2 == 0 ? true : false;
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

Your task is to create a function - basic_op().

The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

Examples:

basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7

*/

function basicOp(operation, value1, value2)
{
  switch(operation) {
    case "*":
        return value1 * value2;
    case "/":
        return value1 / value2;
    case "-":
        return value1 - value2;
    default:
        return value1 + value2;
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!

*/


var quote = function(fighter) {
  return fighter.toUpperCase() == "george saint pierre".toUpperCase() ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
Notes:

The number can be negative already, in which case no change is required.
Zero (0) can't be negative, see examples above.

*/

function makeNegative(num) {
  return -Math.abs(num);
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

*/


function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  
  return "Hello, " + name + "!";
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

	if bmi <= 18.5 return "Underweight"

	if bmi <= 25.0 return "Normal"

	if bmi <= 30.0 return "Overweight"

	if bmi > 30 return "Obese"
*/


function bmi(weight, height) {
  let bmi = weight/Math.pow(height,2)
  if (bmi <= 18.5) return "Underweight"
  if (bmi <= 25.0) return "Normal"
  if (bmi <= 30.0) return "Overweight"
  if (bmi > 30) return "Obese"
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*


Summation
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


*/



var summation = function (num) {
  return (1+num)/2 * num;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?

*/

function opposite(number) {
  return -number;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!

*/


var quote = function(fighter) {
  return fighter.toUpperCase() == "george saint pierre".toUpperCase() ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*



*/






