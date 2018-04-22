/*


	Create a RomanNumerals helper that can convert a roman numeral to and from 
	an integer value. It should follow the API demonstrated in the examples below. 
	Multiple roman numeral values will be tested for each helper method.

	Modern Roman numerals are written by expressing each digit separately starting 
	with the left most digit and skipping any digit with a value of zero. In Roman 
	numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is 
	written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

	Examples:

	RomanNumerals.toRoman(1000); // should return 'M'
	RomanNumerals.fromRoman('M'); // should return 1000
	Help:

	Symbol    Value
	I          1
	V          5
	X          10
	L          50
	C          100
	D          500
	M          1,000


*/


let RomanNumerals = {};

var myDictionary = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}

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

RomanNumerals.toRoman = function(roman){
  

  
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
  return solution(roman)
}
RomanNumerals.fromRoman = function(roman){
  
  function solution(roman){
    roman = defuseRomanNumber(roman)
    var result = getNumberFromRoman(roman)
    return result
  }  
  function defuseRomanNumber(num){
      var res = []
      var last = num[0]
      var currList = [last]
      for(let index=1;index<num.length;index++){
          if (num[index] == last){
              currList.push(num[index])
          } else{
              res.push(currList)
              last = num[index]
              currList = [last]
          }
      }
      res.push(currList)
      return res
  }
  
  function getNumberFromRoman(num){
          
      var result = 0;
      
      for(let i=0;i<num.length -1;i++){
          if(myDictionary[num[i][0]] < myDictionary[num[i+1][0]]){
              result -= getValueFromTableOfRomanLetters(num[i])
          } else{
              result += getValueFromTableOfRomanLetters(num[i])
          }
      }
              
      result += getValueFromTableOfRomanLetters(num[num.length-1])
      
      
      return result
  } 
  function getValueFromTableOfRomanLetters(tableOfLetters){
      var tableOfNumbers = tableOfLetters.map(letter => myDictionary[letter])
      return tableOfNumbers.reduce((total,val) => total+val)
  }
  
  
  return solution(roman);
}
    
    
    
