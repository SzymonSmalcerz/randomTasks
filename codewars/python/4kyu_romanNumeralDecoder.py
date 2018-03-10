'''


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



'''



myDictionary = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}


def solution(roman):
    roman = defuseRomanNumber(roman)
    result = getNumberFromRoman(roman)
    return result
    
def defuseRomanNumber(num):
    res = []
    last = num[0]
    currList = [last]
    for index in range(1,len(num)):
        if num[index] == last:
            currList.append(num[index])
        else:
            res.append(currList)
            last = num[index]
            currList = [last]
    res.append(currList)
    return res

def getNumberFromRoman(num):
        
    result = 0;
    for i in range(0,len(num)-1):
        if myDictionary[num[i][0]] < myDictionary[num[i+1][0]]:
            result -= getValueFromTableOfRomanLetters(num[i])
        else:
            result += getValueFromTableOfRomanLetters(num[i])
            
    result += getValueFromTableOfRomanLetters(num[-1])
    
    
    return result
    
def getValueFromTableOfRomanLetters(tableOfLetters):
    tableOfNumbers = map(lambda letter : myDictionary[letter],tableOfLetters)
    return sum(tableOfNumbers)
    
    
    
    
    
    
