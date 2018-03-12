'''


	Consider the number triangle below, in which each number is equal to the number above plus the number to the left.
	If there is no number above, assume the number above is a 0.

	1
	1 1
	1 2 2
	1 3 5 5
	1 4 9 14 14
	The triangle has 5 rows and the sum of the last row is sum([1,4,9,14,14]) = 42.

	You will given an integer n and your task will be to return the sum of the last row of a triangle of n-rows.

	In the example above:

	solve(5) = 42.
	More examples in test cases. Good luck!



'''


def solve(n):
    return sum(getRow(n,[1]))

def getRow(n,myRow):
    if n <= 1:
        return myRow
    lastNum = 0;
    newRow = []
    for index,number in enumerate(myRow):
        value = myRow[index] + lastNum
        newRow.append(value)
        lastNum = value
    
    newRow = newRow + [newRow[-1]];
    return getRow(n-1,newRow)
        
