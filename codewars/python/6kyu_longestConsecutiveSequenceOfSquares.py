'''


	In this kata you're expected to find the longest consecutive sequence of positive squares that sums up to a number.

	E.g,

	595 = 62 + 72 + 82 + 92 + 102 + 112 + 122 .

	Your task is to write the function longest_sequence(n) that either finds 
	the longest consecutive sequence of squares that sums to the number n, or determines that no such sequence exists.

	longest_sequence(50) # => [3, 4, 5]
	    # 9 + 16 + 25 = 50

	longest_sequence(595) # => [6, 7, 8, 9, 10, 11, 12]

	longest_sequence(10) # => []
	Return an empty list if no such sequence exists.



'''


import math

def longest_sequence(n):
    sqrtOfN = math.ceil(n**(1/2))
    res = []
    
    lowest = 1;
    highest = 2
    sum = 1 + 4
    while highest<sqrtOfN:
        
        if sum > n:
            sum -= (lowest**2)
            lowest+=1
            
        elif sum < n:
            highest+=1
            sum += (highest**2)
        else:
            res.append(list(range(lowest,highest+1)))
            highest+=1
            sum += (highest**2)
    
#     final check if we have something in list, and then return the longest one
    if len(res) != 0:
        res.sort(key = lambda x : -len(x))
        return res[0]
    else:
        return []

