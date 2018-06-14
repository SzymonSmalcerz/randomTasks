//just kind of too small and often too easy to give them own file

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Complete the function that takes a non-negative integer 
	n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

	Examples
	n = 0  ==> [1]        # [2^0]
	n = 1  ==> [1, 2]     # [2^0, 2^1]
	n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/


function powersOfTwo(n){
  return Array.apply(null, {length: n+1}).map((v,i) => Math.pow(2,i));
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*


	Your boss decided to save money by purchasing some 
	cut-rate optical character recognition software for 
	scanning in the text of old novels to your database. 
	At first it seems to capture words okay, but you quickly 
	notice that it throws in a lot of numbers at random places in the text. For example:

	stringClean('! !') == '! !'
	stringClean('123456789') == ''
	stringClean('This looks5 grea8t!') == 'This looks great!'
	Your harried co-workers are looking to you for a solution 
	to take this garbled text and remove all of the numbers. 
	Your program will take in a string and clean out all numeric characters, 
	and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


*/


function stringClean(s){
  return s.replace(/[0-9]/g, "");
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Description:
	Remove all exclamation marks from sentence 
	but ensure a exclamation mark at the end of string. 
	For a beginner kata, you can assume that the input data 
	is always a non empty string, no need to verify it.

	Examples
	remove("Hi!") === "Hi!"
	remove("Hi!!!") === "Hi!"
	remove("!Hi") === "Hi!"
	remove("!Hi!") === "Hi!"
	remove("Hi! Hi!") === "Hi Hi!"
	remove("Hi") === "Hi!"

*/


function remove(s){
  return s.replace(/!/g,"") + "!";
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Description:
	Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

	Examples
	replace("Hi!") === "H!!"
	replace("!Hi! Hi!") === "!H!! H!!"
	replace("aeiou") === "!!!!!"
	replace("ABCDE") === "!BCD!"

*/


function replace(s){
  return s.replace(/[aeiouAEIOU]/g,"!");
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	If you can't sleep, just count sheeps!!

	Task:
	Given a number, 3 for example, return a 
	string with a murmur: "1 sheep...2 sheep...3 sheep..."

	Note:
	You will always receive a positive integer.

*/


var countSheep = function (num){
  return Array.from(new Array(num),(val,index)=>index + 1 ).join(" sheep...") + " sheep...";
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	You take your son to the forest to see the monkeys. 
	You know that there are a certain number there (n), 
	but your son is too young to just appreciate the full number, 
	he has to start counting them from 1.

	As a good parent, you will sit and count with him. 
	Given the number (n), populate an array with all 
	numbers up to and including that number, but excluding zero.

	For example, if n = 10:

	return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/


function monkeyCount(n) {
  return Array.apply(null, {length: n+1}).map(Number.call, Number).slice(1);
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	Character recognition software is widely used to digitise printed texts. 
	Thus the texts can be edited, searched and stored on a computer.

	When documents (especially pretty old ones written with a typewriter), 
	are digitised character recognition softwares often make mistakes.

	Your task is correct the errors in the digitised text. You only 
	have to handle the following mistakes:

	S is misinterpreted as 5
	O is misinterpreted as 0
	I is misinterpreted as 1
	The test cases contain numbers only by mistake.
*/


function correct(string)
{
	string = string.replace(/[5]/g,"S")
	string = string.replace(/[0]/g,"O")
	string = string.replace(/[1]/g,"I")
  return string;
}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
	altERnaTIng cAsE <=> ALTerNAtiNG CaSe
	Define to_alternating_case(char*) such that each lowercase 
	letter becomes uppercase and each uppercase letter becomes lowercase.
*/


String.prototype.toAlternatingCase = function () {
  return this.split("").map(val => val.toUpperCase() == val ? val.toLowerCase() : val.toUpperCase()).join("");
}

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

	write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

	the string should start with a 1.

	a string with size 6 should return :'101010'.

	with size 4 should return : '1010'.

	with size 12 should return : '101010101010'.

	The size will always be positive and will only use whole numbers.

*/


function stringy(size) {
  return Array.apply(null, {length: size}).map((v,i) => i%2 == 0 ? '1' : '0').join("");
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

	Rock Paper Scissors
	Let's play! You have to return which player won! In case of a draw return Draw!.

	Examples:

	rps('scissors','paper') // Player 1 won!
	rps('scissors','rock') // Player 2 won!
	rps('paper','paper') // Draw!

*/



const getMsg = (n) => `Player ${n} won!`;
const obj ={
  'scissorspaper'       : getMsg(1),
  'rockscissors'        : getMsg(1),
  'paperrock'           : getMsg(1),
  'paperscissors'       : getMsg(2),
  'scissorsrock'        : getMsg(2),
  'rockpaper'           : getMsg(2),
  'paperpaper'          : "Draw!",
  'rockrock'            : "Draw!",
  'scissorsscissors'    : "Draw!",
}
const rps = (p1, p2) => {
  return obj[p1+p2]
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Write a function that takes an array of strings as an argument 
	and returns a sorted array containing the same strings, ordered from shortest to longest.

	For example, if this array were passed as an argument:

	["Telescopes", "Glasses", "Eyes", "Monocles"]

	Your function would return the following array:

	["Eyes", "Glasses", "Monocles", "Telescopes"]

	All of the strings in the array passed to your function will be different lengths, 
	so you will not have to decide how to order multiple strings of the same length.

*/



function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};

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

	When provided with a number between 0-9, return it in words.

	Input :: 1

	Output :: "One".

	Try using "Switch" statements.

	This kata is meant for beginners. Rank and upvote to bring it out of beta

*/



let handler = {
  "0" : "Zero",
  "1" : "One",
  "2" : "Two",
  "3" : "Three",
  "4" : "Four",
  "5" : "Five",
  "6" : "Six",
  "7" : "Seven",
  "8" : "Eight",
  "9" : "Nine"
}

function switchItUp(number){
  return handler[number.toString()];
}







//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Nathan loves cycling.

	Because Nathan knows it is important to stay 
	hydrated, he drinks 0.5 litres of water per hour of cycling.

	You get given the time in hours and you need to 
	return the number of litres Nathan will drink, rounded to the smallest value.

	For example:

	time = 3 ----> litres = 1

	time = 6.7---> litres = 3

	time = 11.8--> litres = 5

*/



function litres(time) {
  return Math.floor(Math.floor(time) * 0.5);
}



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	There is an object/class already created called MrFreeze. 
	Mark this object as frozen so that no other changes can be made to it.

*/



// mark the MrFreeze object instance as frozen
Object.freeze(MrFreeze);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Create a function which answers the question "Are you playing banjo?".
	If your name starts with the letter "R" or lower case "r", you are playing banjo!

	The function takes a name as its only argument, and returns one of the following strings:

	name + " plays banjo" 
	name + " does not play banjo"
	Names given are always valid strings.

*/



function areYouPlayingBanjo(name) {
  return (name.toLowerCase()[0] == "r" ? `${name} plays ` : `${name} does not play `) + "banjo";
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Get the number n (n>0) to return the reversed sequence from n to 1.

	Example : n=5 >> [5,4,3,2,1]

*/


const reverseSeq = n => {
  return Array.apply(null, {length: n}).map((v,i) => n-i);
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*

	Your Job
	Find the sum of all multiples of n below m

	Keep in Mind
	n and m are natural numbers (positive integers)
	m is excluded from the multiples
	Examples
	sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
	sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
	sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
	sumMul(4, -7)  ==> "INVALID"

*/


function sumMul(n,m){
  let res = 0;
  let counter = n;
  while(counter < m){
    res += counter;
    counter += n;
  }
  
  return n >= m ? "INVALID" : res;
  
}


