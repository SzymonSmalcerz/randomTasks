'''


	If You Complete Array_Series You Know By Now How 
	To Manipulate Array Effectively ,

	If Not You Can Take a Look To Get How Things Work :

	Minimize_Sum_Of_array

	Maximize_Product_Of_Array

	Well , It's Time To Expand Our Series For More :

	We are Given an array [] of n integers,

	The Task is to find all the LEADERS in the array.

	An element is leader if it is greater than The Sum 
	all the elements to its right side.
	Notes :

	1- Vector Size is at least 3 .

	2- The Vector's Numbers could be a mixture of Positives 
	and Negatives also Zeros .

	3- Repeatition of Numbers in the Vector Could Occur .

	4- The Leaders Vector should Store the Leading numbers 
	In the Same Order in the Original Vector .

	If Any Of The Previous Points (Notes) Is Not Clear, 
	Pay Attention To The Examples Clarify Everything .
	Input :: Output Examples ::

	1 - arrayLeaders ({1,2,3,4,0}) // return {4}

	Explanation ::

	Since (4) is greater than The Sum all the elements to its right side, Note 
	that (The Last Element is Zero) Equall to Right Sum Of Its Elemtns (zero).

	2- arrayLeaders ({16,17,4,3,5,2}) // return {17,5,2}

	Explanation ::

	Since (17) is greater than The Sum of  all the elements to its right side, 
	and (5) is greater than The Sum of all the elements to its right side, 
	and (2) is greater than The Sum of all the elements to its right side Which is (Zero). 

	3- arrayLeaders ({5,2,-1}) // return {5,2}

	Explanation ::

	Since (5) is greater than The Sum of all the elements to its right side, 
	and(2) is greater than The Sum of all the elements to its right side,
	Note that (-1) is Less than the Its Right Side Elements (Zero) . 

	4- arrayLeaders ({0,-1,-29,3,2}) // return {0,-1,3,2}

	Explanation ::

	Since (0) is greater than The Sum of all the elements to its right side, 
	and (-1) is greater than The Sum of all the elements to its right side, 
	and (3) is greater than The Sum of all the elements to its right side, 
	and (2) is greater than The Sum of all the elements to its right side Which is (Zero).


'''

def array_leaders(numbers):
    res = [];
    for i in range(0,len(numbers)):
        currentElement = numbers[i];
        sumOfRightSide = sum(numbers[i+1:]);
        if currentElement > sumOfRightSide :
            res.append(currentElement);
    return res;
