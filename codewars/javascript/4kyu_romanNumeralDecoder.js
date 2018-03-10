/*


Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI') # should return 21
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



var myDictionary = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}


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
    
    
    
    
