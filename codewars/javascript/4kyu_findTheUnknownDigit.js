/*

https://www.codewars.com/kata/find-the-unknown-digit/train/javascript

To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form

[number][op][number]=[number]
He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.




*/


function solveExpression(exp) {
  //...
  var arrOfValuesInExp = exp.split(/[^0-9]/).join("").split("").map(val => parseInt(val))
  
  //test if expression is ok
  exp = exp.split("=");
  let left = exp[0];
  let right = exp[1];
  if(right.search(/[^0-9?-]/) != -1 || (right[0] === '0' && right.length >1) || right.slice(1).search(/[^0-9?]/) != -1){return -1};
  let tester = /^-*[1-9?][0-9?]{0,}[+\*-]-*[1-9?][0-9?]{0,}$/;
  if(!tester.test(left)) return -1;
  
  //replace question marks with "i"
  for(let i = 0;i<10;i++){
    if(arrOfValuesInExp.indexOf(i) != -1){continue;}
    let tempLeft = left.replace(/[?]/g,i.toString());
    let tempRight = right.replace(/[?]/g,i.toString());
    
    if(tempLeft.search("--") != -1){
      tempLeft = tempLeft.replace("--","-(-");
      tempLeft += ")"
    }
    
    if(i==0 && (tempRight.slice(0,1) == "0" && tempRight.length > 1) || (tempRight.slice(0,2) == "-0" && tempRight.length > 2)|| tempLeft.slice().split(/[-+*]/).filter(val=>val).reduce((total,val) =>total || (val[0] == "0" && val.length > 1),false)){
       continue;
    }
    
    if(eval(tempLeft) == tempRight){return i}
  }
   return -1;
 }
