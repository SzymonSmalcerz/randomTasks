/*

https://www.codewars.com/kata/calculating-with-functions/javascript

This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most
inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three))
should return 2, not 2.666666...

*/

function zero(callback) { return callback ? Math.floor( eval(0 + callback) ) : 0; }
function one(callback) { return callback ? Math.floor( eval(1 + callback) ) : 1; }
function two(callback) { return callback ? Math.floor( eval(2 + callback) ) : 2; }
function three(callback) { return callback ? Math.floor( eval(3 + callback) ) : 3; }
function four(callback) { return callback ? Math.floor( eval(4 + callback) ) : 4; }
function five(callback) { return callback ? Math.floor( eval(5 + callback) ) : 5; }
function six(callback) { return callback ? Math.floor( eval(6 + callback) ) : 6; }
function seven(callback) { return callback ? Math.floor( eval(7 + callback) ) : 7; }
function eight(callback) { return callback ? Math.floor( eval(8 + callback) ) : 8; }
function nine(callback) { return callback ? Math.floor( eval(9 + callback) ) : 9; }

function plus(callback) { return "+" + callback; }
function minus(callback) { return "-" + callback; }
function times(callback) { return "*" + callback; }
function dividedBy(callback) { return "/" + callback; }
