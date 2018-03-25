/*


	Create a function taking a positive integer as its parameter and 
	returning a string containing the Roman Numeral representation of that integer.

	Modern Roman numerals are written by expressing each digit separately 
	starting with the left most digit and skipping any digit with a value 
	of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
	resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
	1666 uses each Roman symbol in descending order: MDCLXVI.

	Example:

	solution(1000); // should return 'M'
	Help:

	Symbol    Value
	I          1
	V          5
	X          10
	L          50
	C          100
	D          500
	M          1,000
	Remember that there can't be more than 3 identical symbols in a row.

	More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals


*/



let mapper = {
  "0"    : "",
  "1"    : "I",
  "2"    : "II",
  "3"    : "III",
  "4"    : "IV",
  "5"    : "V",
  "6"    : "VI",
  "7"    : "VII",
  "8"    : "VIII",
  "9"    : "IX"
}


function solution(number){
  
  let result = "";
  //first handle numbers > 1000
  let numOfMs = Math.floor(number/1000);
  result += "M".repeat(numOfMs);
  
  
  //next handle values 0 - 900
  if(number%1000 >= 900){
    return result + "CM" + parseNumTo100(number%100);
  }else if(number%1000 >= 500){
    return result + "D" + solution((number%1000) - 500);
  }else if(number%1000 >= 400){
    return result + "CD" + solution((number%1000) - 400);
  }else {
    if((number%1000) - 100 >= 0){
      return result + "C" + solution((number%1000) - 100);
    }else {
      return result + parseNumTo100(number%100);
    }
  }
}

function parseNumTo100(number){

  
  if(number >= 90){return "XC" + parseNum0to9(number%10)}
  else if(number >= 50){
    return "L" + parseNumTo100(number - 50);
  }else if(number >= 40){
    return "XL" + parseNum0to9(number%10);
  }else {
    if(number - 10 >= 0){
      return "X" + parseNumTo100(number - 10);
    }else {
      return parseNum0to9(number%10);
    }
  }
  
}

function parseNum0to9(number){
  return mapper[number.toString()];
}
