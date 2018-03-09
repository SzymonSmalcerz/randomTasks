'''

	#Find the missing letter

	Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

	You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
	The array will always contain letters in only one case.

	Example:

	['a','b','c','d','f'] -> 'e'
	['O','Q','R','S'] -> 'P'
	(Use the English alphabet with 26 letters!)

	Have fun coding it and please don't forget to vote and rank this kata! :-)

	I have also created other katas. Take a look if you enjoyed this kata!


'''

from functools import reduce

def find_missing_letter(chars):
    asciValues = map(charIntoASCII, chars)
    return getMissingLetter(asciValues)

def charIntoASCII(char):
    return ord(char)

def getMissingLetter(asciValues):
    for index in range(0, len(asciValues)):
        if asciValues[index] +1 != asciValues[index+1]:
            return chr(asciValues[index] + 1);

